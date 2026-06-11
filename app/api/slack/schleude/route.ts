import { NextRequest } from "next/server";
import { WebClient } from "@slack/web-api";
import { Workspace, WorkingHours } from "@/types/supabase";
import { supabaseAdmin } from "@/utils/supabase/admin";
import { isWithinWorkingHours } from "@/lib/workingHours";

export async function GET(request: NextRequest) {
  const secretToken = request.nextUrl.searchParams.get("secret");

  if (secretToken !== process.env.SLACK_SCHEDULE_SECRET) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const supabase = supabaseAdmin();

  // Ensure no caching for up-to-date data
  const { data: workspaces, error } = await supabase
    .from("workspace")
    .select("*")
    .eq("is_active", true);

  if (error) {
    console.error("Error fetching active workspaces:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching workspaces" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  if (!workspaces || workspaces.length === 0) {
    console.error("No active workspaces found");
    return new Response(
      JSON.stringify({ message: "No active workspaces found" }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  console.log(
    `Updating Slack presence for ${workspaces.length} active workspaces`
  );

  const updateResults = await Promise.all(
    workspaces.map(async (workspace) => {
      const {
        slack_auth_token: token,
        working_hours: workHours,
        stripe_is_paid: isPaid,
      } = workspace as Workspace;

      console.log(
        `Processing workspace ${workspace.id} (${workspace.team_name})`
      );

      // Log activity for unpaid workspaces
      if (!isPaid) {
        console.log(`Skipping workspace ${workspace.id}: not paid`);
        const { error: activityError } = await supabase
          .from("activity_logs")
          .insert({
            workspace_id: workspace.id,
            action: "not_paid",
            details: { message: "Workspace is not paid" },
          });

        if (activityError) {
          console.error(
            `Error inserting activity log for workspace ${workspace.id}:`,
            activityError
          );
          return {
            id: workspace.id,
            status: "error",
            message: activityError,
          };
        }

        return { id: workspace.id, status: "not_paid" };
      }

      // Skip if token or work hours are missing
      if (!token || !workHours) {
        console.error(
          `Missing token or work hours for workspace ${workspace.id}`
        );
        return { id: workspace.id, status: "missing_data" };
      }

      const slack = new WebClient(token);

      // Get the current time in the workspace's timezone
      const now = new Date();
      const workspaceLocalTime = new Date(
        now.toLocaleString("en-US", {
          timeZone: (workHours as WorkingHours).timezone,
        })
      );

      const currentDay = workspaceLocalTime.getDay();
      const currentHour = workspaceLocalTime.getHours();
      const currentMinute = workspaceLocalTime.getMinutes();

      console.log(
        `Workspace ${
          workspace.id
        } local time: ${workspaceLocalTime.toISOString()}`
      );
      console.log(
        `Current day: ${currentDay}, Current hour: ${currentHour}, Current minute: ${currentMinute}`
      );

      let action: string;

      try {
        if (
          isWithinWorkingHours(
            workHours as WorkingHours,
            currentDay,
            currentHour
          )
        ) {
          await slack.users.setPresence({ presence: "auto" });
          action = "set_active";
          console.log(`Setting workspace ${workspace.id} to active`);
        } else {
          await slack.users.setPresence({ presence: "away" });
          action = "set_away";
          console.log(`Setting workspace ${workspace.id} to away`);
        }
      } catch (err: any) {
        const slackError: string | undefined = err?.data?.error;
        const isAuthError =
          slackError === "token_revoked" ||
          slackError === "invalid_auth" ||
          slackError === "account_inactive";

        console.error(
          `Slack API error for workspace ${workspace.id} (${workspace.team_name}): ${slackError ?? err?.message}`
        );

        if (isAuthError) {
          // Token is no longer valid, deactivate the workspace so the
          // cron stops retrying it. The user must reconnect Slack.
          const { error: deactivateError } = await supabase
            .from("workspace")
            .update({ is_active: false })
            .eq("id", workspace.id);

          if (deactivateError) {
            console.error(
              `Failed to deactivate workspace ${workspace.id}:`,
              deactivateError
            );
          } else {
            console.log(
              `Deactivated workspace ${workspace.id} due to ${slackError}`
            );
          }

          await supabase.from("activity_logs").insert({
            workspace_id: workspace.id,
            action: "deactivated",
            details: {
              message: `Slack token invalid (${slackError}), workspace deactivated`,
            },
          });

          return { id: workspace.id, status: "deactivated", error: slackError };
        }

        await supabase.from("activity_logs").insert({
          workspace_id: workspace.id,
          action: "error",
          details: {
            message: `Slack API error: ${slackError ?? err?.message}`,
          },
        });

        return { id: workspace.id, status: "error", error: slackError };
      }

      const { data: activityLog, error: activityError } = await supabase
        .from("activity_logs")
        .insert({
          workspace_id: workspace.id,
          action,
          details: { currentDay, currentHour, currentMinute, workHours },
        });

      if (activityError) {
        console.error(
          `Error inserting activity log for workspace ${workspace.id}:`,
          activityError
        );
        return { id: workspace.id, status: "error", message: activityError };
      }

      return { id: workspace.id, status: "success" };
    })
  );

  return new Response(
    JSON.stringify({
      message: "Slack presence update complete",
      results: updateResults,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://slackactivity.com";

/**
 * Every target query in this niche returns an AI Overview, and a large share of
 * discovery now happens inside assistants rather than on a SERP. So the AI
 * crawlers are named explicitly and allowed: a wildcard `Allow: /` already
 * permits them, but several of these bots are evaluated against their own
 * user-agent block first, and being explicit removes any ambiguity.
 */
const AI_CRAWLERS = [
  // Retrieval bots — these fetch pages to answer a live question and cite them.
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "cohere-ai",
  // Training crawlers — allowed deliberately: being in the training corpus is
  // how a small brand gets named in answers it never ranked for.
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "meta-externalagent",
];

const DISALLOW = ["/api/", "/dashboard/", "/signin", "/admin/", "/_next/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW,
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

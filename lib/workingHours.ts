import { WorkingHours } from "@/types/supabase";

/**
 * Whether a given local day/hour falls inside the configured working hours.
 * Supports overnight windows (startHour > endHour, e.g. 22 -> 6): the
 * post-midnight part belongs to the shift that started the previous day.
 */
export function isWithinWorkingHours(
  workHours: WorkingHours,
  day: number, // 0 = Sunday ... 6 = Saturday
  hour: number // 0-23
): boolean {
  const { startHour, endHour, daysOfWeek } = workHours;

  if (startHour < endHour) {
    return daysOfWeek.includes(day) && hour >= startHour && hour < endHour;
  }

  // Overnight window (e.g. 22 -> 6). startHour === endHour means 24h.
  if (hour >= startHour) {
    return daysOfWeek.includes(day);
  }
  if (hour < endHour || startHour === endHour) {
    // Early-morning part of a shift that started yesterday.
    return daysOfWeek.includes((day + 6) % 7);
  }
  return false;
}

/** Hours per configured workday, handling overnight windows. */
export function configuredHoursPerDay(workHours: WorkingHours): number {
  const { startHour, endHour } = workHours;
  if (startHour === endHour) return 24;
  return startHour < endHour ? endHour - startHour : 24 - startHour + endHour;
}

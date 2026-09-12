/**
 * Returns the current month and year in "Month YYYY" format (e.g., "September 2026").
 * Automatically stays current every month.
 */
export function getCurrentMonthYear(): string {
  return new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

/**
 * Returns current ISO date string formatted for Schema.org JSON-LD
 */
export function getCurrentISODate(): string {
  return new Date().toISOString().split("T")[0] + "T00:00:00+05:30";
}

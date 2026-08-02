/**
 * Fixed locale and UTC timezone so the server and client always agree — a
 * locale-dependent format would hydrate differently for some visitors.
 */
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}

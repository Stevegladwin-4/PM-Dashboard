import type { PMStatus, PMSchedule } from "./types";

export function statusOf(pm: PMSchedule, asOf = new Date()): PMStatus {
  if (pm.completed_date) return "Done";

  const today = new Date(asOf);
  today.setHours(0, 0, 0, 0);

  const due = new Date(`${pm.scheduled_date}T00:00:00`);
  if (due < today) return "Overdue";

  const soon = new Date(today);
  soon.setDate(soon.getDate() + 7);

  if (due <= soon) return "Pending";
  return "Scheduled";
}

export function fmtDate(value: string | Date) {
  const date = typeof value === "string" ? new Date(`${value}T00:00:00`) : value;
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(date);
}
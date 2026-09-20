import type { PMSchedule, PMStatus } from "./types";

export function getPMStatus(pm: PMSchedule): PMStatus {
  if (!pm.scheduled_date) {
    return "N/A";
  }

  if (pm.completed_date) {
    return "Done";
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const scheduled = new Date(`${pm.scheduled_date}T00:00:00`);

  const diffDays = Math.ceil(
    (scheduled.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  if (diffDays < 0) return "Overdue";
  if (diffDays <= 30) return "Pending";

  return "Scheduled";
}
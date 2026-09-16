export type PMStatus = "Done" | "Overdue" | "Pending" | "Scheduled";

export type PMSchedule = {
  id: string;
  equipment_id: string;
  pm_no: number;
  scheduled_date: string;
  completed_date: string | null;
  completed_by: string | null;
};

export type Equipment = {
  id: string;
  sno: number;
  department: string;
  inventory_no: string;
  location: string | null;
  equipment_name: string;
  model: string | null;
  serial_no: string | null;
  make: string | null;
  campus: string | null;
  contract: string | null;
  pm_schedules: PMSchedule[];
};
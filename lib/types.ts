export type PMStatus =
  | "Done"
  | "Overdue"
  | "Pending"
  | "Scheduled"
  | "N/A";

export type UserRole =
  | "SUPER_ADMIN"
  | "SUPER_VIEWER"
  | "section_admin"
  | "technician";

export type Section =
  | "HIGH_END_RADIOLOGY"
  | "LIFE_SUPPORT"
  | "GENERAL_MONITORING";

export type PMSchedule = {
  id: string;
  equipment_id: string;
  pm_no: number;
  scheduled_date: string | null;
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
  section: Section | null;
  pm_schedules: PMSchedule[];
};

export type UserRoleRecord = {
  user_id: string;
  login_id: string | null;
  role: UserRole;
  section: Section | null;
};
create extension if not exists "uuid-ossp";

create table if not exists public.equipment (
  id uuid primary key default uuid_generate_v4(),
  sno integer not null,
  department text not null,
  inventory_no text not null unique,
  location text,
  equipment_name text not null,
  model text,
  serial_no text,
  make text,
  campus text,
  contract text,
  section text,
  working_status text not null default 'ACTIVE',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.equipment
  add column if not exists section text;

alter table public.equipment
  add column if not exists working_status text not null default 'ACTIVE';

create table if not exists public.pm_schedules (
  id uuid primary key default uuid_generate_v4(),
  equipment_id uuid not null references public.equipment(id) on delete cascade,
  pm_no integer not null check (pm_no between 1 and 4),
  scheduled_date date,
  completed_date date,
  completed_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(equipment_id, pm_no)
);

create index if not exists equipment_inventory_idx on public.equipment(inventory_no);
create index if not exists equipment_department_idx on public.equipment(department);
create index if not exists equipment_campus_idx on public.equipment(campus);
create index if not exists pm_equipment_idx on public.pm_schedules(equipment_id);
create index if not exists pm_date_idx on public.pm_schedules(scheduled_date);

alter table public.equipment enable row level security;
alter table public.pm_schedules enable row level security;

drop policy if exists "equipment_select_authenticated" on public.equipment;
create policy "equipment_select_authenticated"
on public.equipment for select to authenticated using (true);

drop policy if exists "equipment_insert_authenticated" on public.equipment;
create policy "equipment_insert_authenticated"
on public.equipment for insert to authenticated with check (true);

drop policy if exists "equipment_update_authenticated" on public.equipment;
create policy "equipment_update_authenticated"
on public.equipment for update to authenticated using (true) with check (true);

drop policy if exists "pm_select_authenticated" on public.pm_schedules;
create policy "pm_select_authenticated"
on public.pm_schedules for select to authenticated using (true);

drop policy if exists "pm_update_authenticated" on public.pm_schedules;
create policy "pm_update_authenticated"
on public.pm_schedules for update to authenticated using (true) with check (true);

-- Realtime publication
do $$
begin
  alter publication supabase_realtime add table public.equipment;
exception when duplicate_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.pm_schedules;
exception when duplicate_object then null;
end $$;

-- Sample equipment. Re-running is safe.
insert into public.equipment
(sno,department,inventory_no,location,equipment_name,model,serial_no,make,campus,contract)
values
(1,'Radiology','INV-001','Block A · Floor 1','X-Ray Machine','XR-5000','SN-50001','Siemens','North','AMC-A'),
(2,'Pathology','INV-002','Block B · Floor 2','Centrifuge','CF-220','SN-50002','Eppendorf','South','AMC-B'),
(3,'ICU','INV-003','Block C · Floor 3','Ventilator','VT-9','SN-50003','Mindray','East','Warranty'),
(4,'OT','INV-004','Block A · Floor 2','Anesthesia Workstation','AW-700','SN-50004','Drager','North','AMC-C'),
(5,'CSSD','INV-005','Block D · Ground','Autoclave','AC-50','SN-50005','Tuttnauer','Main','AMC-A'),
(6,'Cardiology','INV-006','Block B · Floor 1','ECG Machine','ECG-12','SN-50006','GE Healthcare','South','AMC-B'),
(7,'Laboratory','INV-007','Block C · Floor 1','Analyzer','AU-680','SN-50007','Beckman Coulter','East','AMC-A'),
(8,'Radiology','INV-008','Block A · Floor 2','CT Scanner','CT-64','SN-50008','Canon','North','AMC-C'),
(9,'ICU','INV-009','Block C · Floor 2','Infusion Pump','IP-800','SN-50009','B. Braun','Main','Warranty'),
(10,'OT','INV-010','Block A · Floor 3','Surgical Light','SL-500','SN-50010','Dr. Mach','North','AMC-A'),
(11,'Pathology','INV-011','Block B · Floor 3','Microscope','CX-23','SN-50011','Olympus','South','AMC-B'),
(12,'CSSD','INV-012','Block D · Ground','Washer Disinfector','WD-100','SN-50012','Getinge','Main','AMC-C'),
(13,'Emergency','INV-013','Block E · Ground','Defibrillator','DF-700','SN-50013','Philips','East','Warranty'),
(14,'Radiology','INV-014','Block A · Floor 1','Ultrasound','US-500','SN-50014','Samsung','North','AMC-A'),
(15,'Laboratory','INV-015','Block C · Floor 2','Blood Gas Analyzer','BG-900','SN-50015','Roche','East','AMC-B'),
(16,'ICU','INV-016','Block C · Floor 3','Patient Monitor','PM-9000','SN-50016','Mindray','Main','AMC-C'),
(17,'OT','INV-017','Block A · Floor 2','Electrosurgical Unit','ESU-300','SN-50017','Valleylab','North','AMC-A'),
(18,'Pathology','INV-018','Block B · Floor 1','Tissue Processor','TP-200','SN-50018','Leica','South','AMC-B'),
(19,'CSSD','INV-019','Block D · Ground','Sterilizer','ST-800','SN-50019','Systec','Main','Warranty'),
(20,'Cardiology','INV-020','Block E · Floor 1','Holter Monitor','HM-12','SN-50020','GE Healthcare','East','AMC-C'),
(21,'Emergency','INV-021','Block E · Ground','Transport Ventilator','TV-100','SN-50021','Hamilton','East','AMC-A'),
(22,'Radiology','INV-022','Block A · Floor 3','Mammography','MG-300','SN-50022','Hologic','North','AMC-B'),
(23,'Laboratory','INV-023','Block C · Floor 1','Chemistry Analyzer','CA-400','SN-50023','Siemens','South','AMC-C'),
(24,'ICU','INV-024','Block C · Floor 2','Syringe Pump','SP-600','SN-50024','Terumo','Main','Warranty')
on conflict (inventory_no) do nothing;

-- Four PM records for every equipment asset.
insert into public.pm_schedules (equipment_id, pm_no, scheduled_date)
select e.id, p.pm_no,
       current_date + case p.pm_no
         when 1 then -25
         when 2 then -2
         when 3 then 3
         when 4 then 22
       end
from public.equipment e
cross join (values (1),(2),(3),(4)) p(pm_no)
on conflict (equipment_id, pm_no) do nothing;

-- Keep updated_at current.
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists equipment_updated_at on public.equipment;
create trigger equipment_updated_at before update on public.equipment
for each row execute function public.set_updated_at();

drop trigger if exists pm_updated_at on public.pm_schedules;
create trigger pm_updated_at before update on public.pm_schedules
for each row execute function public.set_updated_at();
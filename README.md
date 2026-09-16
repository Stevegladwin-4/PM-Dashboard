# Preventive Maintenance Dashboard

Full Next.js + Supabase implementation with PM1, PM2, PM3 and PM4.

## Features

- 4 PM schedules per equipment asset
- Individual Mark Done / Undo
- Mark all PMs for an asset
- Automatic Done / Overdue / Pending / Scheduled
- Supabase PostgreSQL
- Supabase Auth
- RLS
- Supabase Realtime
- Search
- Campus / Department / Contract / Status filters
- Compliance percentage
- Overdue and due-soon counters
- CSV export
- Responsive desktop/tablet/phone layout
- Phone/tablet comparison table; data is horizontally scrollable, not hidden
- SQL schema and 24 sample equipment records
- Make / Model / Serial / Inventory fields

## Setup

1. Install Node.js 20+.
2. Create a Supabase project.
3. Copy `.env.local.example` to `.env.local`.
4. Put the project URL and anon/publishable key in `.env.local`.
5. In Supabase SQL Editor, run `supabase/schema.sql`.
6. In Supabase Authentication, enable Email provider.
7. Create an account using the Sign in dialog.
8. Run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Only the public anon/publishable key belongs in the browser. Never expose a Supabase service-role key.

## Status rules

- Done: completed_date exists
- Overdue: not complete and scheduled date is before today
- Pending: not complete and scheduled date is today through the next 7 days
- Scheduled: not complete and more than 7 days away

## Realtime

The browser subscribes to `equipment` and `pm_schedules` Postgres changes. When one dashboard changes a PM, other open dashboards reload automatically.

## Production hardening

The included RLS allows authenticated users to update PM schedules. For production, add role-based authorization (for example admin/supervisor/technician/viewer) and restrict equipment insert/update policies according to your organization.

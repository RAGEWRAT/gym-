-- Run in Supabase SQL Editor. Service role (server) bypasses RLS; optional policies for anon if needed later.

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text,
  service text not null,
  preferred_date text not null,
  preferred_time text not null,
  notes text
);

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  message text not null
);

create index if not exists appointments_created_at_idx on public.appointments (created_at desc);
create index if not exists contact_submissions_created_at_idx on public.contact_submissions (created_at desc);

alter table public.appointments enable row level security;
alter table public.contact_submissions enable row level security;

-- No policies: only service role (used by API routes) can insert.

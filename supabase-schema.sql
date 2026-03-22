create extension if not exists pgcrypto;

create table if not exists public.gutachten_projects (
  project_id text primary key,
  owner_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  name text not null,
  location text not null default '',
  scope text not null default '',
  workflow_stage text not null default 'intake',
  html_ready boolean not null default false,
  pdf_ready boolean not null default false,
  released_at date,
  note text not null default '',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_gutachten_projects_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_gutachten_projects_updated_at on public.gutachten_projects;
create trigger trg_gutachten_projects_updated_at
before update on public.gutachten_projects
for each row
execute function public.set_gutachten_projects_updated_at();

alter table public.gutachten_projects enable row level security;

drop policy if exists "gutachten_select_own" on public.gutachten_projects;
create policy "gutachten_select_own"
on public.gutachten_projects
for select
using (auth.uid() = owner_id);

drop policy if exists "gutachten_insert_own" on public.gutachten_projects;
create policy "gutachten_insert_own"
on public.gutachten_projects
for insert
with check (auth.uid() = owner_id or owner_id is null);

drop policy if exists "gutachten_update_own" on public.gutachten_projects;
create policy "gutachten_update_own"
on public.gutachten_projects
for update
using (auth.uid() = owner_id)
with check (auth.uid() = owner_id);

drop policy if exists "gutachten_delete_own" on public.gutachten_projects;
create policy "gutachten_delete_own"
on public.gutachten_projects
for delete
using (auth.uid() = owner_id);

CREATE TABLE IF NOT EXISTS "clients" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "team_id" TEXT NOT NULL REFERENCES "teams" ("id") ON DELETE CASCADE,
  "name" TEXT NOT NULL,
  "email" TEXT,
  "company" TEXT,
  "status" TEXT NOT NULL DEFAULT 'active',
  "notes" TEXT DEFAULT '',
  "created_by_user_id" TEXT NOT NULL REFERENCES "users" ("id") ON DELETE SET NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);
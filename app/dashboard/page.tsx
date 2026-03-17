import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "@/app/dashboard/client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";

// CRM-specific welcome—makes dashboard greet by name with CRM context.
function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Welcome to StartwiseCRM!";
  if (hour < 18) return "Back to growing your clients?";
  return "Closing deals tonight?";
}

export default async function DashboardPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const [user] = await db
    .select({ firstName: users.firstName })
    .from(users)
    .where(eq(users.id, session.userId))
    .limit(1);

  const firstName = user?.firstName || "there";

  return (
    <Client
      greeting={getGreeting()}
      firstName={firstName}
    />
  );
}
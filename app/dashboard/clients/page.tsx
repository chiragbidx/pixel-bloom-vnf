import Client from "./client";
import { db } from "@/lib/db/client";
import { clients } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function ClientsPage() {
  const session = await getAuthSession();
  if (!session) {
    // In real-world, redirect to signin or show error
    return <div className="text-destructive">Access denied</div>;
  }

  let clientData = [];
  if (session.teamId) {
    clientData = await db
      .select()
      .from(clients)
      .where(eq(clients.teamId, session.teamId))
      .orderBy(clients.createdAt);
  }

  return <Client clients={clientData} />;
}
"use server";

import { eq, and } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { clients } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";
import { revalidatePath } from "next/cache";
import { clientFormSchema } from "./client-validation";

// Only export async functions—no objects, types, or re-exports!

export async function addClient(form: FormData) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  if (!session.teamId) {
    throw new Error("You must be assigned to a team to add clients.");
  }

  const parsed = clientFormSchema.safeParse({
    name: form.get("name"),
    email: form.get("email"),
    company: form.get("company"),
    status: form.get("status"),
    notes: form.get("notes"),
  });
  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message || "Invalid client input");
  }
  await db.insert(clients).values({
    teamId: session.teamId,
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company,
    status: parsed.data.status ?? "active",
    notes: parsed.data.notes,
    createdByUserId: session.userId,
  });

  revalidatePath("/dashboard/clients");
}

export async function updateClient(form: FormData) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  if (!session.teamId) {
    throw new Error("You must be assigned to a team to update clients.");
  }

  const parsed = clientFormSchema.safeParse({
    id: form.get("id"),
    name: form.get("name"),
    email: form.get("email"),
    company: form.get("company"),
    status: form.get("status"),
    notes: form.get("notes"),
  });
  if (!parsed.success || !parsed.data.id) {
    throw new Error(parsed.error.issues[0]?.message || "Client ID is missing or invalid");
  }

  await db
    .update(clients)
    .set({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      status: parsed.data.status ?? "active",
      notes: parsed.data.notes,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(clients.id, parsed.data.id),
        eq(clients.teamId, session.teamId)
      )
    );

  revalidatePath("/dashboard/clients");
}

export async function deleteClient(id: string) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  if (!session.teamId) {
    throw new Error("You must be assigned to a team to delete clients.");
  }

  await db.delete(clients).where(
    and(
      eq(clients.id, id),
      eq(clients.teamId, session.teamId)
    )
  );

  revalidatePath("/dashboard/clients");
}
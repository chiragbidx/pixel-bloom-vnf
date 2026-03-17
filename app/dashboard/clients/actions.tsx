"use server";

import { z } from "zod";
import { eq, and } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { clients } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";
import { revalidatePath } from "next/cache";

// Zod validation for the client form
export const clientFormSchema = z.object({
  id: z.string().optional(), // present on edit
  name: z.string().min(1, "Name is required"),
  email: z.string().email().optional().or(z.literal("")),
  company: z.string().optional(),
  status: z.string().optional(),
  notes: z.string().optional(),
});

// List clients for the current user's team
export async function getClients() {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  // For now, assume a user is always part of one team; extend with teams as needed
  if (!session.teamId) throw new Error("No team assigned");
  return db
    .select()
    .from(clients)
    .where(eq(clients.teamId, session.teamId))
    .orderBy(clients.createdAt);
}

// Add (create) a new client
export async function addClient(form: FormData) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  if (!session.teamId) throw new Error("No team assigned");

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

// Update an existing client
export async function updateClient(form: FormData) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  if (!session.teamId) throw new Error("No team assigned");

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

// Delete a client
export async function deleteClient(id: string) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  if (!session.teamId) throw new Error("No team assigned");

  await db.delete(clients).where(
    and(
      eq(clients.id, id),
      eq(clients.teamId, session.teamId)
    )
  );

  revalidatePath("/dashboard/clients");
}
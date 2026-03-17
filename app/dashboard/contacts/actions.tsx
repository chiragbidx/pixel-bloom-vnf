"use server";

import { eq, and } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { contacts } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";
import { revalidatePath } from "next/cache";
import { contactFormSchema } from "./contact-validation";

// List contacts
export async function getContacts() {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  if (!session.teamId) return [];

  const result = await db
    .select()
    .from(contacts)
    .where(eq(contacts.teamId, session.teamId))
    .orderBy(contacts.createdAt);
  return result;
}

// Add contact
export async function addContact(form: FormData) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  if (!session.teamId) {
    throw new Error("You must be assigned to a team to add contacts.");
  }

  const parsed = contactFormSchema.safeParse({
    name: form.get("name"),
    email: form.get("email"),
    phone: form.get("phone"),
    company: form.get("company"),
    status: form.get("status"),
    notes: form.get("notes"),
    clientId: form.get("clientId")
  });
  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message || "Invalid contact input");
  }
  await db.insert(contacts).values({
    teamId: session.teamId,
    clientId: parsed.data.clientId || null,
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    company: parsed.data.company,
    status: parsed.data.status ?? "active",
    notes: parsed.data.notes,
    createdByUserId: session.userId,
  });

  revalidatePath("/dashboard/contacts");
}

// Update contact
export async function updateContact(form: FormData) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  if (!session.teamId) {
    throw new Error("You must be assigned to a team to update contacts.");
  }

  const parsed = contactFormSchema.safeParse({
    id: form.get("id"),
    name: form.get("name"),
    email: form.get("email"),
    phone: form.get("phone"),
    company: form.get("company"),
    status: form.get("status"),
    notes: form.get("notes"),
    clientId: form.get("clientId")
  });
  if (!parsed.success || !parsed.data.id) {
    throw new Error(parsed.error.issues[0]?.message || "Contact ID is missing or invalid");
  }

  await db
    .update(contacts)
    .set({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      company: parsed.data.company,
      status: parsed.data.status ?? "active",
      notes: parsed.data.notes,
      clientId: parsed.data.clientId || null,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(contacts.id, parsed.data.id),
        eq(contacts.teamId, session.teamId)
      )
    );

  revalidatePath("/dashboard/contacts");
}
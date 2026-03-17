"use server";

import { eq, and } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { users, teams, teamMembers } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";
import { revalidatePath } from "next/cache";

// List teams (for dropdowns)
export async function getAllTeams() {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  const result = await db.select().from(teams).orderBy(teams.name);
  return result;
}

// List team members for a team
export async function getTeamMembers(teamId: string) {
  const members = await db
    .select({
      id: users.id,
      email: users.email,
      name: db.sql`${users.firstName} || ' ' || ${users.lastName}`,
      role: teamMembers.role,
    })
    .from(teamMembers)
    .innerJoin(users, eq(teamMembers.userId, users.id))
    .where(eq(teamMembers.teamId, teamId));
  return members;
}

// Assign a user to a team (or change their existing team membership)
export async function assignUserToTeam({
  userId,
  teamId,
  role,
}: {
  userId: string;
  teamId: string;
  role: string;
}) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");

  // Only admins/owners can assign teams
  const requester = await db
    .select()
    .from(teamMembers)
    .where(
      and(
        eq(teamMembers.userId, session.userId),
        eq(teamMembers.teamId, teamId)
      )
    );
  if (!requester.length || !["owner", "admin"].includes(requester[0].role.toLowerCase())) {
    throw new Error("You do not have permission to assign users to this team.");
  }

  // Prevent duplicate assignment
  const existing = await db
    .select()
    .from(teamMembers)
    .where(and(eq(teamMembers.userId, userId), eq(teamMembers.teamId, teamId)));
  if (existing.length) {
    throw new Error("User is already assigned to this team.");
  }

  // Insert new membership
  await db.insert(teamMembers).values({
    userId,
    teamId,
    role: role || "member",
  });

  revalidatePath("/dashboard/users");
}

// Optionally, reassign user to a new team (removes them from prior)
export async function reassignUserToTeam({
  userId,
  newTeamId,
  role,
}: {
  userId: string;
  newTeamId: string;
  role: string;
}) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");

  // Only admins/owners can reassign teams
  const requester = await db
    .select()
    .from(teamMembers)
    .where(
      and(
        eq(teamMembers.userId, session.userId),
        eq(teamMembers.teamId, newTeamId)
      )
    );
  if (!requester.length || !["owner", "admin"].includes(requester[0].role.toLowerCase())) {
    throw new Error("You do not have permission to reassign users to this team.");
  }

  // Remove prior memberships
  await db
    .delete(teamMembers)
    .where(eq(teamMembers.userId, userId));

  // Insert new membership
  await db.insert(teamMembers).values({
    userId,
    teamId: newTeamId,
    role: role || "member",
  });

  revalidatePath("/dashboard/users");
}
"use server";

// In a real implementation, add CRUD actions for workspace team members here.
export async function getTeamMembers(teamId: string) {
  // Replace with DB lookup for known team structure and user list
  return [
    {
      id: "U123",
      email: "jane@acme.com",
      name: "Jane Doe",
      role: "Owner",
    },
    {
      id: "U456",
      email: "john@acme.com",
      name: "John Smith",
      role: "Member",
    },
  ];
}
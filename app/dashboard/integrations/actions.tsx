"use server";

// In a real implementation, list enabled integrations per user/org
export async function getIntegrations(userId: string) {
  // Replace with DB lookup of user's active integrations
  return [
    {
      name: "Slack",
      enabled: false,
      connectUrl: "#",
    },
    {
      name: "Zapier",
      enabled: false,
      connectUrl: "#",
    },
  ];
}
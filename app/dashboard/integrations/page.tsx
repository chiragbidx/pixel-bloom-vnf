import Client from "./client";

// If integrations are user-specific, force dynamic rendering
export const dynamic = "force-dynamic";

export default async function IntegrationsPage() {
  return <Client />;
}
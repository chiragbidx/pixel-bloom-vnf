import Client from "./client";

// API Keys are always user/team-specific, force dynamic
export const dynamic = "force-dynamic";

export default async function ApiKeysPage() {
  return <Client />;
}
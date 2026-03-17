import Client from "./client";

// Force dynamic for auth-guarded, user-specific activity streams
export const dynamic = "force-dynamic";

export default async function ActivityLogPage() {
  return <Client />;
}
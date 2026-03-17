import Client from "./client";

// Add dynamic rendering for dashboards that use DB/auth during render
export const dynamic = "force-dynamic";

export default async function AnalyticsPage() {
  // This is where you would prepare any server-fetched analytics data or props.
  // For now, the Client component will handle UI and possible interactive fetches.
  return <Client />;
}
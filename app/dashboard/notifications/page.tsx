import Client from "./client";

// Force dynamic for authenticated or personalized notifications
export const dynamic = "force-dynamic";

export default async function NotificationsPage() {
  return <Client />;
}
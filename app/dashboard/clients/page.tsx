import Client from "./client";
import { getClients } from "./actions";

// Server Component
export const dynamic = "force-dynamic";

export default async function ClientsPage() {
  const clients = await getClients();
  return <Client clients={clients} />;
}
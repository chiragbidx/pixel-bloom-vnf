import Client from "./client";

// For dashboard, always force dynamic if data/auth are required at runtime
export const dynamic = "force-dynamic";

export default async function BillingPage() {
  // Could fetch current billing plan or invoices here.
  return <Client />;
}
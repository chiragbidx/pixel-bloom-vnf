import Client from "./client";

// Help/Docs page should always render dynamically (content could update often)
export const dynamic = "force-dynamic";

export default async function HelpPage() {
  return <Client />;
}
"use client";

import { DashboardContent } from "@/components/dashboard/dashboard-content";

// CRM: Client UI for /dashboard, propagates CRM context.

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <DashboardContent
      greeting={greeting}
      firstName={firstName}
    />
  );
}
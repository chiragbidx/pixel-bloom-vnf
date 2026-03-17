"use client";

import { BarChart3 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ReportsClient() {
  // In production, fetch tailored reports with real charting.
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <BarChart3 className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Reports</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Access exportable insights and in-depth data on your CRM activity.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-6 text-center text-muted-foreground">
            No reports generated yet. Choose a report type to begin.
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
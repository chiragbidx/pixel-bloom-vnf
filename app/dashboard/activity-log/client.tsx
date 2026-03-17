"use client";

import { ListOrdered } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ActivityLogClient() {
  // Stub out real activity log; show sample structure
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <ListOrdered className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Activity Log</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Review recent actions and system activity for your team.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-6 text-center text-muted-foreground">
            No account activity found yet.
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
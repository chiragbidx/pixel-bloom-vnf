"use client";

import { ActivitySquare } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ActivitiesClient() {
  // Will later list, add, and edit activities (meetings, calls, tasks).
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <ActivitySquare className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Activities</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Manage scheduled activities and view recent actions.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-10 text-muted-foreground">
            No activities scheduled.
          </div>
          <div className="mt-6 flex justify-end">
            <Button disabled variant="outline">
              Add Activity
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
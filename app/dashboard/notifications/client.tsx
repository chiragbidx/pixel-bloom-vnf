"use client";

import { Bell } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NotificationsClient() {
  // Replace with real notification feed in future
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <Bell className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Notifications</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Stay updated on team activity, reminders, and system alerts.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-6 text-center text-muted-foreground">
            <Badge variant="secondary" className="mb-3">No unread notifications</Badge>
            <p className="text-sm">We'll notify you here about important account or team events.</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
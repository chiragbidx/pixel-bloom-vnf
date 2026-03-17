"use client";

import { Briefcase } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DealsClient() {
  // Show open, won, and lost deals here in future
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <Briefcase className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Deals</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Track pipeline progress, deal values, and closures.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Current Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-10 text-muted-foreground">
            No deals recorded.
          </div>
          <div className="mt-6 flex justify-end">
            <Button disabled variant="outline">
              Add Deal
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
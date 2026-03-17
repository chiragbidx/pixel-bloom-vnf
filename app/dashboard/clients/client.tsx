"use client";

import { Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ClientsClient() {
  // In production, fetch companies/organizations tied to CRM.
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <Users className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Clients</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        View organizations you work with and their key contacts.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Your Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-10 text-muted-foreground">
            No clients registered.
          </div>
          <div className="mt-6 flex justify-end">
            <Button disabled variant="outline">
              Add Client
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
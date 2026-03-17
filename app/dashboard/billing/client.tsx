"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BillingClient() {
  // In a full implementation, wire up billing provider and show real subscription status.
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <CreditCard className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Manage your subscription, payment method, and invoices.
      </p>

      {/* Current Plan Card */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-lg font-medium">Pro</p>
              <p className="text-sm text-muted-foreground">Billed monthly</p>
            </div>
            <Button className="mt-4 sm:mt-0" variant="outline">
              Upgrade Plan
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Invoices Table (placeholder) */}
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground text-center py-10">
            No invoices found.
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
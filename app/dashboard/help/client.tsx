"use client";

import { HelpCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HelpClient() {
  // In full product, could fetch help articles from support DB or knowledge base
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <HelpCircle className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Help & Documentation</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Access guides or get support for your account and workspace.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Need Assistance?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 text-sm text-muted-foreground">
            Browse help docs, tutorials, or reach out to our team.
          </div>
          <Button asChild variant="outline">
            <a href="mailto:support@example.com" tabIndex={-1}>
              Contact support
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
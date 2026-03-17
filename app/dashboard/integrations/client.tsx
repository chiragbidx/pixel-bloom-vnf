"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Plug } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntegrationsClient() {
  // In the real implementation, list connected integrations and offer management actions.
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <Plug className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Integrations</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Connect with other tools and services to extend your CRM functionality.
      </p>

      {/* Example integration card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Slack</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground text-sm">
              Get real-time notifications in your workspace.
            </p>
            <Button variant="outline" disabled>
              Coming soon
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Zapier</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground text-sm">
              Automate tasks by connecting your CRM to 5,000+ apps.
            </p>
            <Button variant="outline" disabled>
              Coming soon
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
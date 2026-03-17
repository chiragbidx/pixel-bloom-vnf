"use client";

import { Key } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ApiKeysClient() {
  // Real API Key management logic goes here in future
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <Key className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">API Keys</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Manage your workspace's API access.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Keys</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground mb-6">
            Create or revoke API keys for secure external access to your CRM data.
          </div>
          <div className="flex flex-col gap-3">
            {/* Replace below with list of keys from server later */}
            <div className="text-center py-10">No API keys found.</div>
            <Button disabled variant="outline">Generate new key</Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
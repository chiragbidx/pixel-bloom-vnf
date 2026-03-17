"use client";

import { NotebookPen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactsClient() {
  // In production, list, add, and edit contacts here.
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <NotebookPen className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Contacts</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Manage people, relationships, and communications.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Your Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-10 text-muted-foreground">
            No contacts have been added.
          </div>
          <div className="mt-6 flex justify-end">
            <Button disabled variant="outline">
              Add Contact
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
"use client";

import { NotebookPen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotesClient() {
  // In production, list, add, or edit user notes.
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <NotebookPen className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Notes</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Store and organize notes for clients, deals, and activities.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Your Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-10 text-muted-foreground">
            No notes found.
          </div>
          <div className="mt-6 flex justify-end">
            <Button disabled variant="outline">
              Add Note
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
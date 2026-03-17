"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function UsersClient() {
  // In a real implementation, fetch user/team list via server actions.
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <Users className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Team Users</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Manage your workspace members and their roles.
      </p>

      {/* Example: team members list card (hard-coded sample for now) */}
      <Card>
        <CardHeader>
          <CardTitle>Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Jane Doe</p>
                <p className="text-muted-foreground text-sm">jane@acme.com</p>
              </div>
              <span className="ml-auto rounded-full px-2 py-0.5 text-xs bg-primary/10 text-primary font-medium">Owner</span>
            </div>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">John Smith</p>
                <p className="text-muted-foreground text-sm">john@acme.com</p>
              </div>
              <span className="ml-auto rounded-full px-2 py-0.5 text-xs bg-muted">Member</span>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button variant="outline" disabled>
              Invite Member
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
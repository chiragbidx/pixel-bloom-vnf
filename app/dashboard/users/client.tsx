"use client";

import * as React from "react";
import { useState, useEffect, useTransition } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getAllTeams, getTeamMembers, assignUserToTeam, findUserIdByEmail } from "./actions";

type Team = {
  id: string;
  name: string;
};

type Member = {
  id: string;
  email: string;
  name: string;
  role: string;
};

export default function UsersClient() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [members, setMembers] = useState<Member[]>([]);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignUserId, setAssignUserId] = useState<string | null>(null);
  const [assignEmail, setAssignEmail] = useState<string>("");
  const [assignRole, setAssignRole] = useState<string>("member");
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // Initial fetch of team list
  useEffect(() => {
    startTransition(async () => {
      const fetchedTeams = await getAllTeams();
      setTeams(fetchedTeams);
      if (fetchedTeams.length > 0) {
        setSelectedTeamId(fetchedTeams[0].id);
      }
    });
  }, []);

  // Fetch members whenever selectedTeamId changes
  useEffect(() => {
    if (selectedTeamId) {
      startTransition(async () => {
        const fetchedMembers = await getTeamMembers(selectedTeamId);
        setMembers(fetchedMembers);
      });
    }
  }, [selectedTeamId]);

  function handleOpenAssignModal() {
    setAssignUserId(null);
    setAssignEmail("");
    setAssignRole("member");
    setShowAssignModal(true);
    setError(null);
  }

  function handleCloseAssignModal() {
    setShowAssignModal(false);
    setError(null);
  }

  async function handleAssign(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedTeamId) return;
    setError(null);
    startTransition(async () => {
      try {
        if (!assignEmail) throw new Error("Please enter an email.");
        // Lookup userId by email FIRST
        const userObj = await findUserIdByEmail(assignEmail);
        if (!userObj) {
          setError("User does not exist. Please invite or ensure user is registered.");
          return;
        }
        await assignUserToTeam({
          userId: userObj.id,
          teamId: selectedTeamId,
          role: assignRole,
        });
        setShowAssignModal(false);
        setAssignEmail("");
        setAssignRole("member");
        const fetchedMembers = await getTeamMembers(selectedTeamId);
        setMembers(fetchedMembers);
      } catch (e: any) {
        setError(e.message || "Assignment failed.");
      }
    });
  }

  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <Users className="text-primary size-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Team Users</h1>
      </div>
      <p className="mb-6 text-muted-foreground">
        Manage your workspace members and their roles.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>
            <span>Members</span>
            <span className="ml-4">
              {teams.length > 1 && (
                <select
                  className="border rounded px-2 py-1 ml-2"
                  value={selectedTeamId ?? ""}
                  onChange={e => setSelectedTeamId(e.target.value)}
                  disabled={pending}
                >
                  {teams.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              )}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {members.length === 0 && (
              <div className="py-8 text-center text-muted-foreground">
                No members assigned.
              </div>
            )}
            {members.map((member) => (
              <div className="flex items-center gap-3" key={member.id}>
                <Avatar>
                  <AvatarFallback>
                    {(member.name?.split(" ") ?? [])
                      .map(s => s[0])
                      .join("")
                      .substring(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-muted-foreground text-sm">{member.email}</p>
                </div>
                <span className={`ml-auto rounded-full px-2 py-0.5 text-xs 
                  ${member.role.toLowerCase() === "owner"
                    ? "bg-primary/10 text-primary font-medium"
                    : "bg-muted"}`
                  }
                >
                  {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <Button variant="outline" onClick={handleOpenAssignModal} disabled={pending}>
              Assign User to Team
            </Button>
          </div>
        </CardContent>
      </Card>
      {/* Modal for assigning user to a team */}
      <Dialog open={showAssignModal} onOpenChange={setShowAssignModal}>
        <DialogContent className="max-w-md w-full">
          <DialogHeader>
            <DialogTitle>Assign User to Team</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4" action={handleAssign} onSubmit={handleAssign} autoComplete="off">
            <div>
              <label className="block text-sm mb-1" htmlFor="assignEmail">
                User Email *
              </label>
              <Input
                id="assignEmail"
                name="assignEmail"
                value={assignEmail}
                onChange={e => setAssignEmail(e.target.value)}
                required
                disabled={pending}
              />
              <div className="text-xs text-muted-foreground mt-1">
                You must enter the user's email as registered.
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="assignRole">
                Role
              </label>
              <select
                id="assignRole"
                name="assignRole"
                value={assignRole}
                onChange={e => setAssignRole(e.target.value)}
                className="border rounded w-full px-2 py-1"
                disabled={pending}
              >
                <option value="member">Member</option>
                <option value="admin">Admin</option>
                <option value="owner">Owner</option>
              </select>
            </div>
            {error && (
              <div className="text-destructive text-sm">{error}</div>
            )}
            <DialogFooter className="flex gap-2 pt-4">
              <Button type="button" variant="secondary" onClick={handleCloseAssignModal} disabled={pending}>
                Cancel
              </Button>
              <Button type="submit" variant="default" disabled={pending}>
                Assign
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
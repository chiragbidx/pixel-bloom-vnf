"use client";

import * as React from "react";
import { useState, useRef, useTransition } from "react";
import { Users, Loader2, Edit2, Trash2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { addClient, updateClient, deleteClient } from "./actions";

type ClientType = {
  id: string,
  teamId: string,
  name: string,
  email?: string | null,
  company?: string | null,
  status?: string | null,
  notes?: string | null,
  createdByUserId: string,
  createdAt: string,
  updatedAt: string,
};

export default function ClientsClient(props: { clients: ClientType[] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editClient, setEditClient] = useState<ClientType | null>(null);
  const [pending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleOpenAdd() {
    setEditClient(null);
    setFormError(null);
    setModalOpen(true);
  }

  function handleOpenEdit(client: ClientType) {
    setEditClient(client);
    setFormError(null);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setEditClient(null);
    setFormError(null);
    setModalOpen(false);
  }

  // Add/Edit form submission
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      try {
        if (editClient) {
          await updateClient(formData);
        } else {
          await addClient(formData);
        }
        handleCloseModal();
      } catch (e: any) {
        setFormError(e.message || "Save failed.");
      }
    });
  }

  // Delete client logic
  function handleDelete(id: string) {
    if (!window.confirm("Are you sure you want to delete this client?")) return;
    setDeletingId(id);
    startTransition(async () => {
      await deleteClient(id);
      setDeletingId(null);
    });
  }

  // UI for add/edit client form inside a modal dialog
  function ClientFormModal() {
    return (
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md w-full">
          <DialogHeader>
            <DialogTitle>
              {editClient ? "Edit Client" : "Add Client"}
            </DialogTitle>
          </DialogHeader>
          <form
            className="mt-6 grid gap-4"
            action={handleFormSubmit}
            onSubmit={handleFormSubmit}
            autoComplete="off"
          >
            {editClient && (
              <input type="hidden" name="id" value={editClient.id} />
            )}
            <div>
              <label className="block text-sm mb-1" htmlFor="name">
                Client Name *
              </label>
              <Input
                id="name"
                name="name"
                defaultValue={editClient?.name ?? ""}
                required
                disabled={pending}
                autoFocus
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="company">
                Company
              </label>
              <Input
                id="company"
                name="company"
                defaultValue={editClient?.company ?? ""}
                disabled={pending}
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue={editClient?.email ?? ""}
                disabled={pending}
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="status">
                Status
              </label>
              <Input
                id="status"
                name="status"
                placeholder="active/inactive"
                defaultValue={editClient?.status ?? "active"}
                disabled={pending}
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="notes">
                Notes
              </label>
              <Textarea
                id="notes"
                name="notes"
                defaultValue={editClient?.notes ?? ""}
                rows={3}
                disabled={pending}
              />
            </div>
            {formError && (
              <div className="text-destructive text-sm">{formError}</div>
            )}
            <DialogFooter className="flex gap-2 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={handleCloseModal}
                disabled={pending}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="default"
                disabled={pending}
                className="gap-2"
              >
                {pending && <Loader2 className="size-4 animate-spin" />}
                {editClient ? "Save Changes" : "Add Client"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  // Empty state
  if (!props.clients?.length) {
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
              <Button onClick={handleOpenAdd} variant="outline">
                Add Client
              </Button>
            </div>
          </CardContent>
        </Card>
        <ClientFormModal />
      </section>
    );
  }

  // Main clients list/table UI
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
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead>
                <tr className="bg-muted">
                  <th className="px-3 py-2 text-left">Name</th>
                  <th className="px-3 py-2 text-left">Company</th>
                  <th className="px-3 py-2 text-left">Email</th>
                  <th className="px-3 py-2 text-left">Status</th>
                  <th className="px-3 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {props.clients.map((client) => (
                  <tr key={client.id} className="border-b last:border-none">
                    <td className="px-3 py-2 font-medium">{client.name}</td>
                    <td className="px-3 py-2">{client.company ?? "-"}</td>
                    <td className="px-3 py-2">{client.email ?? "-"}</td>
                    <td className="px-3 py-2">{client.status ?? "-"}</td>
                    <td className="px-3 py-2">
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          aria-label="Edit"
                          className="text-muted-foreground"
                          onClick={() => handleOpenEdit(client)}
                          disabled={pending}
                        >
                          <Edit2 className="size-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          aria-label="Delete"
                          className="text-destructive"
                          onClick={() => handleDelete(client.id)}
                          disabled={pending || deletingId === client.id}
                        >
                          {deletingId === client.id ? (
                            <Loader2 className="size-4 animate-spin" />
                          ) : (
                            <Trash2 className="size-4" />
                          )}
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-end">
            <Button onClick={handleOpenAdd} variant="outline">
              Add Client
            </Button>
          </div>
        </CardContent>
      </Card>
      <ClientFormModal />
    </section>
  );
}
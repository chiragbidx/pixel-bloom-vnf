"use client";

import * as React from "react";
import { useState, useTransition } from "react";
import { NotebookPen, Edit2, Loader2, Trash2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { getContacts, addContact, updateContact } from "./actions";

type ContactType = {
  id: string,
  name: string,
  email?: string | null,
  phone?: string | null,
  company?: string | null,
  status?: string | null,
  notes?: string | null,
  clientId?: string | null,
  createdByUserId: string,
  createdAt: string,
  updatedAt: string,
};

export default function ContactsClient() {
  const [contacts, setContacts] = React.useState<ContactType[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editContact, setEditContact] = useState<ContactType | null>(null);
  const [pending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | null>(null);

  // Fetch contacts on mount
  React.useEffect(() => {
    startTransition(async () => {
      try {
        const contactsData = await getContacts();
        setContacts(contactsData);
      } catch (e) {
        setContacts([]);
      }
    });
  }, []);

  function handleOpenAdd() {
    setEditContact(null);
    setFormError(null);
    setModalOpen(true);
  }

  function handleOpenEdit(contact: ContactType) {
    setEditContact(contact);
    setFormError(null);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setEditContact(null);
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
        if (editContact) {
          await updateContact(formData);
        } else {
          await addContact(formData);
        }
        // Refetch contacts after submit
        const contactsData = await getContacts();
        setContacts(contactsData);
        handleCloseModal();
      } catch (e: any) {
        setFormError(e.message || "Save failed.");
      }
    });
  }

  // UI for add/edit contact form inside a modal dialog
  function ContactFormModal() {
    return (
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md w-full">
          <DialogHeader>
            <DialogTitle>
              {editContact ? "Edit Contact" : "Add Contact"}
            </DialogTitle>
          </DialogHeader>
          <form
            className="mt-6 grid gap-4"
            action={handleFormSubmit}
            onSubmit={handleFormSubmit}
            autoComplete="off"
          >
            {editContact && (
              <input type="hidden" name="id" value={editContact.id} />
            )}
            <div>
              <label className="block text-sm mb-1" htmlFor="name">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                defaultValue={editContact?.name ?? ""}
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
                defaultValue={editContact?.company ?? ""}
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
                defaultValue={editContact?.email ?? ""}
                disabled={pending}
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="phone">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="text"
                defaultValue={editContact?.phone ?? ""}
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
                defaultValue={editContact?.status ?? "active"}
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
                defaultValue={editContact?.notes ?? ""}
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
                {editContact ? "Save Changes" : "Add Contact"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  // Empty state
  if (!contacts?.length) {
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
              <Button onClick={handleOpenAdd} variant="outline">
                Add Contact
              </Button>
            </div>
          </CardContent>
        </Card>
        <ContactFormModal />
      </section>
    );
  }

  // Main contacts list/table UI
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
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead>
                <tr className="bg-muted">
                  <th className="px-3 py-2 text-left">Name</th>
                  <th className="px-3 py-2 text-left">Company</th>
                  <th className="px-3 py-2 text-left">Email</th>
                  <th className="px-3 py-2 text-left">Phone</th>
                  <th className="px-3 py-2 text-left">Status</th>
                  <th className="px-3 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="border-b last:border-none">
                    <td className="px-3 py-2 font-medium">{contact.name}</td>
                    <td className="px-3 py-2">{contact.company ?? "-"}</td>
                    <td className="px-3 py-2">{contact.email ?? "-"}</td>
                    <td className="px-3 py-2">{contact.phone ?? "-"}</td>
                    <td className="px-3 py-2">{contact.status ?? "-"}</td>
                    <td className="px-3 py-2">
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          aria-label="Edit"
                          className="text-muted-foreground"
                          onClick={() => handleOpenEdit(contact)}
                          disabled={pending}
                        >
                          <Edit2 className="size-4" />
                        </Button>
                        {/* Optional: could add delete logic here in future */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-end">
            <Button onClick={handleOpenAdd} variant="outline">
              Add Contact
            </Button>
          </div>
        </CardContent>
      </Card>
      <ContactFormModal />
    </section>
  );
}
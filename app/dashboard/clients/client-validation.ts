import { z } from "zod";

export const clientFormSchema = z.object({
  id: z.string().optional(), // present on edit
  name: z.string().min(1, "Name is required"),
  email: z.string().email().optional().or(z.literal("")),
  company: z.string().optional(),
  status: z.string().optional(),
  notes: z.string().optional(),
});
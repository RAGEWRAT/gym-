import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Phone is required"),
  message: z.string().min(10, "Please add a short message"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const bookSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(8, "Phone is required"),
  email: z.union([z.string().email(), z.literal("")]).optional(),
  service: z.enum(["Free Trial", "Personal Training", "Group Class", "Gym Tour"]),
  preferredDate: z.string().min(1, "Pick a date"),
  preferredTime: z.string().min(1, "Pick a time"),
  notes: z.string().optional(),
});

export type BookInput = z.infer<typeof bookSchema>;

import { z } from "zod";

export const leadSchema = z.object({
  type: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal(""))
}).passthrough();

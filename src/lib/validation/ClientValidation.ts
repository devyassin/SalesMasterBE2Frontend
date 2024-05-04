import * as z from "zod";

export const ClientValidation = z.object({
  nom: z.string().trim().min(1).max(50),
  email: z.string().email(),
  adresse: z.string().min(10),
  telephone: z.string().min(10),
});

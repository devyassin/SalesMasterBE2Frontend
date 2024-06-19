import * as z from "zod";

export const UserLoginValidation = z.object({
  email: z.string().email(),
  password: z.string(),
});

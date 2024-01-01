import { z } from "zod";

export const AuthCrendentialValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 character." }),
});

export type TAuthCrendentialValidator = z.infer<
  typeof AuthCrendentialValidator
>;

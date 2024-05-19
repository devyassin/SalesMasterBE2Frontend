import * as z from "zod";

export const ClientValidation = z.object({
  nom: z.string().trim().min(5).max(50),
  email: z.string().email(),
  adresse: z.string().min(10),
  telephone: z.string().min(10),
});

export const ProductValidation = z.object({
  nom: z
    .string()
    .trim()
    .min(5, "Name must be between 5 and 50 characters")
    .max(50, "Name must be between 5 and 50 characters"),
  description: z
    .string()
    .trim()
    .min(10, "Description must be between 10 and 500 characters")
    .max(5000, "Description must be between 10 and 500 characters"),
  prix: z.number().positive("Price must be a positive number"),
  quantiteEnStock: z
    .number()
    .positive("Stock quantity must be non-negative")
    .int(), // Ensures integer stock
  image: z.any(),
});

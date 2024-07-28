import { z } from "zod";

export const createProductValidationSchema = z.object({
  body: z.object({
    category: z
      .string({
        required_error: "Category Id is required!",
      })
      .min(24, "MongoDB Id must contain 24 character!"),
    title: z.string({
      required_error: "Title is required!",
    }),
    price: z.number({
      required_error: "Price is requierd!",
    }),
    description: z.string({
      required_error: "Description is required!",
    }),
    quantity: z.number({
      required_error: "Product quantity is required!",
    }),
    rating: z.number({
      required_error: "Rating is required!",
    }),
    productImage: z.string({
      required_error: "Prodcut Image is required!",
    }),
  }),
});

export const updateProductValidationSchema = z.object({
  body: z.object({
    category: z.string().optional(),
    title: z.string().optional(),
    price: z.number().optional(),
    description: z.string().optional(),
    quantity: z.string().optional(),
    rating: z.number().optional(),
    productImage: z.string().optional(),
  }),
});

export const productValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
};

import { z } from "zod";

export const createCategoryValidationSchema = z.object({
  body: z.object({
    categoryName: z.string({
      required_error: "Category name is required!",
    }),
    categoryImage: z.string({
      required_error: "Category Image is required!",
    }),
  }),
});

export const updateCategoryValidationSchema = z.object({
  body: z.object({
    categoryName: z.string().optional(),
    categoryImage: z.string().optional(),
  }),
});

export const categoryValidations = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};

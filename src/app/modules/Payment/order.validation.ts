import { z } from "zod";

const categorySchema = z.object({
  _id: z.string().min(1, { message: "Category ID is required" }),
  categoryName: z.string().min(1, { message: "Category Name is required" }),
  isDeleted: z.boolean().optional(),
  categoryImage: z.string().min(1, { message: "Category Image is required" }),
});

export const personalDetailsSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  contactNo: z.string().min(1, { message: "Contact Number is required" }),
});

export const shippingAddressSchema = z.object({
  fullAddress: z.string().min(1, { message: "Full Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zipCode: z.string().min(1, { message: "Zip Code is required" }),
});

export const productInfoSchema = z.object({
  productId: z.string().min(1, { message: "Product ID is required" }),
  productName: z.string().min(1, { message: "Product Name is required" }),
  category: categorySchema,
  unitPrice: z
    .number()
    .min(0, { message: "Unit Price must be a positive number" }),
  productImage: z.string().min(1, { message: "Product Image is required" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
  totalPrice: z
    .number()
    .min(0, { message: "Total Price must be a positive number" }),
});

export const orderDetailsSchema = z.object({
  orderedProducts: z.array(productInfoSchema),
  productNumber: z
    .number()
    .min(1, { message: "Product Number must be at least 1" }),
  totalPrice: z
    .number()
    .min(0, { message: "Total Price must be a positive number" }),
});

export const createOrderSchema = z.object({
  personalDetails: personalDetailsSchema,
  shippingAddress: shippingAddressSchema,
  orderDetails: orderDetailsSchema,
});

export const OrderValidation = {
  createOrderSchema,
};

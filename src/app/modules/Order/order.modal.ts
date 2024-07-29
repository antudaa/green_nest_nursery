import { Schema, model } from "mongoose";
import {
  OrderModel,
  TOrder,
  TPersonalDetails,
  TProductInfo,
  TShippingAddress,
} from "./order.interface";

const personalDetailsSchema = new Schema<TPersonalDetails>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
  },
  { _id: false },
);

const shippingAddressSchema = new Schema<TShippingAddress>(
  {
    fullAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  { _id: false },
);

const productInfoSchema = new Schema<TProductInfo>(
  {
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    category: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    productImage: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { _id: false },
);

const orderDetailsSchema = new Schema(
  {
    orderedProducts: { type: [productInfoSchema], required: true },
    productNumber: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { _id: false },
);

const OrderSchema = new Schema<TOrder, OrderModel>(
  {
    personalDetails: { type: personalDetailsSchema, required: true },
    shippingAddress: { type: shippingAddressSchema, required: true },
    orderDetails: { type: orderDetailsSchema, required: true },
  },
  { timestamps: true },
);

const Order = model<TOrder, OrderModel>("Order", OrderSchema);

export default Order;

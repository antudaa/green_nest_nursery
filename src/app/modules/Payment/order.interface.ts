import { Model } from "mongoose";

export type TPersonalDetails = {
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
};

export type TShippingAddress = {
  fullAddress: string;
  city: string;
  state: string;
  zipCode: string;
};

export type TProductInfo = {
  productId: string; // Added productId
  productName: string;
  category: string;
  unitPrice: number;
  productImage: string;
  quantity: number;
  totalPrice: number;
};

export type TOrder = {
  personalDetails: TPersonalDetails;
  shippingAddress: TShippingAddress;
  orderDetails: {
    orderedProducts: TProductInfo[];
    productNumber: number;
    totalPrice: number;
  };
};

export interface OrderModel extends Model<TOrder> {}

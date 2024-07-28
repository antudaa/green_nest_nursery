import { Model, Types } from "mongoose";

export type TProduct = {
  category: Types.ObjectId;
  title: string;
  price: number;
  description: string;
  quantity: number;
  rating: number;
  productImage?: string;
  outOfStock: boolean;
  isDeleted: boolean;
};

export interface ProductModel extends Model<TProduct> {}

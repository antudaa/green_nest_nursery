import { model, Schema } from "mongoose";
import { ProductModel, TProduct } from "./product.interface";

const productSchema = new Schema<TProduct, ProductModel>(
  {
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
    },
    productImage: {
      type: String,
      required: false,
    },
    outOfStock: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  },
);

export const Product = model<TProduct, ProductModel>("Product", productSchema);

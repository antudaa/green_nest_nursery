import { Model } from "mongoose";

export type TCategory = {
  categoryName: string;
  categoryImage?: string;
  isDeleted: boolean;
};

export interface CategoryModel extends Model<TCategory> {}

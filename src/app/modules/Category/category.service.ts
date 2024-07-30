import { TCategory } from "./category.interface";
import { Category } from "./category.modal";

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

const updateCategoryInDB = async (id: string, payload: Partial<TCategory>) => {
  const result = await Category.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteCategoryFromDB = async (id: string) => {
  const result = await Category.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

const getAllCategoryFromDB = async () => {
  const categoryQuery = await Category.find();
  const totalCountPromise = Category.countDocuments();

  const [categories, totalCount] = await Promise.all([
    categoryQuery,
    totalCountPromise
  ]);

  const result = { total: totalCount, data: categories }

  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  updateCategoryInDB,
  deleteCategoryFromDB,
  getAllCategoryFromDB,
};

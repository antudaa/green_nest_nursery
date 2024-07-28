import express from "express";
import requestValidator from "../../middlewares/validateRequest";
import { categoryValidations } from "./category.validation";
import { CategoryControllers } from "./category.controller";

const router = express.Router();

router.post(
  "/",
  requestValidator(categoryValidations.createCategoryValidationSchema),
  CategoryControllers.createCategoryIntoDB,
);

router.patch(
  "/:id",
  requestValidator(categoryValidations.updateCategoryValidationSchema),
  CategoryControllers.updateCategoryInDB,
);

router.delete("/:id", CategoryControllers.deleteCategoryFromDB);

router.get("/", CategoryControllers.getAllCategoryFromDB);

export const CategoryRoutes = router;

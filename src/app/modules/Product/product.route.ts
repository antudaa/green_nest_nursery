import express from "express";
import requestValidator from "../../middlewares/validateRequest";
import { productValidation } from "./product.validation";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post(
  "/",
  requestValidator(productValidation.createProductValidationSchema),
  ProductControllers.createProductIntoDB,
);

router.patch(
  "/:id",
  requestValidator(productValidation.updateProductValidationSchema),
  ProductControllers.updateProductInDB,
);

router.delete("/:id", ProductControllers.deleteProductFromDB);

router.get("/", ProductControllers.getAllProductFromDB);

router.get("/:id", ProductControllers.getProductByID);

export const ProductRoutes = router;

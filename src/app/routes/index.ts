import { Router } from "express";
import { CategoryRoutes } from "../modules/Category/category.route";
import { ProductRoutes } from "../modules/Product/product.route";
import { PaymentRoutes } from "../modules/Payment/order.route";

const router = Router();

const moduleRoutes = [
  {
    path: `/category`,
    route: CategoryRoutes,
  },
  {
    path: `/product`,
    route: ProductRoutes,
  },
  {
    path: `/order`,
    route: PaymentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

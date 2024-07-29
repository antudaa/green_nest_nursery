import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post("/", OrderControllers.createOrderIntoDB);

export const PaymentRoutes = router;

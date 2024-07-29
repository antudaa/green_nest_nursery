import mongoose from "mongoose";
import { Product } from "../Product/product.modal";
import { TOrder } from "./order.interface";
import Order from "./order.modal";

const createOrderIntoDB = async (payload: TOrder) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const result = await Order.create([payload], { session });

    // Update product quantities
    for (const product of payload.orderDetails.orderedProducts) {
      const productUpdateResult = await Product.findByIdAndUpdate(
        product.productId,
        { $inc: { quantity: -product.quantity } },
        { session, new: true },
      );

      if (!productUpdateResult || productUpdateResult.quantity < 0) {
        throw new Error(`Insufficient stock for ${product.productName}`);
      }
    }

    await session.commitTransaction();
    session.endSession();
    return result;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export const OrderService = {
  createOrderIntoDB,
};

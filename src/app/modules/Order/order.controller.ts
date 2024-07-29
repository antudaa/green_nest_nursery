import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { OrderService } from "./order.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createOrderIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await OrderService.createOrderIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order created Successfull. Thank you for you trust.",
    data: result,
  });
});

export const OrderControllers = {
  createOrderIntoDB,
};

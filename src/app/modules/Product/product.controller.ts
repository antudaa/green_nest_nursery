import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { ProductServices } from "./product.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import noDataFound from "../../middlewares/noDataFound";

const createProductIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product created successfully 🌴",
    data: result,
  });
});

const updateProductInDB: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.updateProductFromDB(id, req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product data updated successfully 🌴",
    data: result,
  });
});

const deleteProductFromDB: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.deleteProductFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product deleted successfully 🌴",
    data: result,
  });
});

const getAllProductFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsFromDB(req.query);

  if (result.data.length === 0) {
    return noDataFound(res);
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product data retrieved successfully 🌴",
    data: result,
  });
});

const getProductByID: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.getProductByID(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product data retrieved successfully 🌴",
    data: result,
  });
});

export const ProductControllers = {
  createProductIntoDB,
  updateProductInDB,
  deleteProductFromDB,
  getAllProductFromDB,
  getProductByID,
};

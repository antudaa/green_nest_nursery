import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { CategoryServices } from "./category.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import noDataFound from "../../middlewares/noDataFound";

const createCategoryIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await CategoryServices.createCategoryIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category created successfully 🌴",
    data: result,
  });
});

const updateCategoryInDB: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryServices.updateCategoryInDB(id, req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category data updated successfully 🌴",
    data: result,
  });
});

const deleteCategoryFromDB: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryServices.deleteCategoryFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category deleted successfully",
    data: result,
  });
});

const getAllCategoryFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await CategoryServices.getAllCategoryFromDB();

  if (result.length === 0) {
    return noDataFound(res);
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category retrieved successfully 🌴",
    data: result,
  });
});

export const CategoryControllers = {
  createCategoryIntoDB,
  updateCategoryInDB,
  deleteCategoryFromDB,
  getAllCategoryFromDB,
};

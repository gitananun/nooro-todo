import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../utils";

export const middlewareValidParamsID = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const numericId = Number(id);

  if (!id || isNaN(numericId) || numericId <= 0 || !Number.isInteger(numericId)) {
    return sendResponse(res, 400, "Invalid ID. ID must be a positive integer.");
  }

  next();
};

import { sendResponse } from "@/utils";
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const middlewareSchema = (req: Request, res: Response, next: NextFunction, schema: Joi.Schema) => {
  const result = schema.validate(req.body);
  if (result.error) return sendResponse(res, 400, result.error.message);

  next();
};

import { middlewareSchema } from "@/middlewares";
import { taskMiddlewareSchema, taskUpdateMiddlewareSchema } from "@/middlewares/schema";
import { taskFindByTitle } from "@/repositories";
import { NextFunction, Response } from "express";
import { ICreateRequest, IUpdateRequest } from ".";
import { sendResponse } from "../../utils";

export const middlewaresCreate = async (req: ICreateRequest, res: Response, next: NextFunction) => {
  const { title } = req.body;
  const item = await taskFindByTitle(title);
  if (item) return sendResponse(res, 400, `Task with title "${title}" already exists`);

  middlewareSchema(req, res, next, taskMiddlewareSchema);
};

export const middlewaresUpdate = async (req: IUpdateRequest, res: Response, next: NextFunction) => {
  middlewareSchema(req, res, next, taskUpdateMiddlewareSchema);
};

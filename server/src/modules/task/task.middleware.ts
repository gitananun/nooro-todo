import { middlewareSchema } from "@/middlewares";
import { taskMiddlewareSchema, taskUpdateMiddlewareSchema } from "@/middlewares/schema";
import { NextFunction, Response } from "express";
import { ICreateRequest, IUpdateRequest } from ".";

export const middlewaresCreate = async (req: ICreateRequest, res: Response, next: NextFunction) => {
  middlewareSchema(req, res, next, taskMiddlewareSchema);
};

export const middlewaresUpdate = async (req: IUpdateRequest, res: Response, next: NextFunction) => {
  middlewareSchema(req, res, next, taskUpdateMiddlewareSchema);
};

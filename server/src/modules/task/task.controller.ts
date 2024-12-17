import { sendControllerErrorResponse, sendResponse } from "@/utils";
import { Request, Response } from "express";
import { ICreateRequest, IUpdateRequest, serviceCreate, serviceDestroy, serviceIndex, serviceShow, serviceUpdate } from ".";

export const controllerIndex = async (_: Request, res: Response) => {
  try {
    const items = await serviceIndex();

    sendResponse(res, 200, "Tasks fetched", items);
  } catch (error: any) {
    sendControllerErrorResponse(res, error, "fetching tasks");
  }
};

export const controllerShow = async (req: Request, res: Response) => {
  try {
    const { params } = req;
    const item = await serviceShow(Number(params.id));

    sendResponse(res, 200, "Task fetched", item);
  } catch (error: any) {
    sendControllerErrorResponse(res, error, "fetching task");
  }
};

export const controllerCreate = async (req: ICreateRequest, res: Response) => {
  try {
    const { body } = req;
    const item = await serviceCreate(body);

    sendResponse(res, 201, "Task created", item);
  } catch (error: any) {
    sendControllerErrorResponse(res, error, "creating task");
  }
};

export const controllerUpdate = async (req: IUpdateRequest, res: Response) => {
  try {
    const { body, params } = req;
    const item = await serviceUpdate(Number(params.id), body);

    sendResponse(res, 200, "Task updated", item);
  } catch (error: any) {
    sendControllerErrorResponse(res, error, "updating task");
  }
};

export const controllerDestroy = async (req: Request, res: Response) => {
  try {
    const { params } = req;
    await serviceDestroy(Number(params.id));

    sendResponse(res, 200, "Task deleted");
  } catch (error: any) {
    sendControllerErrorResponse(res, error, "deleting task");
  }
};

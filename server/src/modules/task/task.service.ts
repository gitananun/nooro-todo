import { taskCreate, taskDestroy, taskFindByID, taskIndex, taskUpdate } from "@/repositories";
import { ErrorWithStatusCode } from "@/types";
import { Task } from "@prisma/client";
import { ICreateRequestBody, IUpdateRequestBody } from ".";

export const serviceIndex = async (): Promise<Task[]> => {
  const items = await taskIndex();
  if (!items) throw new ErrorWithStatusCode(404, "No tasks found");

  return items;
};

export const serviceShow = async (id: number): Promise<Task> => {
  const item = await taskFindByID(id);
  if (!item) throw new ErrorWithStatusCode(404, "Task not found");

  return item;
};

export const serviceCreate = async (data: ICreateRequestBody): Promise<Task> => {
  const item = await taskCreate(data);
  if (!item) throw new ErrorWithStatusCode(500, "Task not created");

  return item;
};

export const serviceUpdate = async (id: number, data: IUpdateRequestBody): Promise<Task> => {
  const item = await taskUpdate(id, data);
  if (!item) throw new ErrorWithStatusCode(500, "Task not updated");

  return item;
};

export const serviceDestroy = async (id: number): Promise<Task> => {
  const item = await taskDestroy(id);
  if (!item) throw new ErrorWithStatusCode(500, "Task not deleted");

  return item;
};

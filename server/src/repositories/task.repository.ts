import { prismaClient } from "@/db";
import { ICreateTaskSchema } from "@/middlewares/schema";
import { Task } from "@prisma/client";

export const taskIndex = async (): Promise<Task[]> => {
  const items = await prismaClient.task.findMany();

  return items;
};

export const taskCreate = async (data: ICreateTaskSchema): Promise<Task> => {
  const item = await prismaClient.task.create({ data });

  return item;
};

export const taskUpdate = async (id: number, data: Partial<ICreateTaskSchema>): Promise<Task> => {
  const item = await prismaClient.task.update({ where: { id }, data });

  return item;
};

export const taskDestroy = async (id: number): Promise<Task> => {
  const item = await prismaClient.task.delete({ where: { id } });

  return item;
};

import { Task } from "@prisma/client";
import Joi from "joi";

export interface ICreateTaskSchema extends Pick<Task, "title" | "color" | "completed"> {}

export const taskMiddlewareSchema = Joi.object<ICreateTaskSchema>({
  title: Joi.string().required(),
  color: Joi.string().optional(),
  completed: Joi.boolean().optional(),
});

export const taskUpdateMiddlewareSchema = taskMiddlewareSchema.fork(Object.keys(taskMiddlewareSchema.describe().keys), (schema) =>
  schema.optional(),
);

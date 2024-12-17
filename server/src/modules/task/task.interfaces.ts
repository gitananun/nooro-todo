import { Task } from "@prisma/client";
import { Request } from "express";

export interface ICreateRequestBody extends Pick<Task, "title" | "color" | "completed"> {}
export interface ICreateRequest extends Request<{}, {}, ICreateRequestBody> {}

export interface IUpdateRequestBody extends Pick<Task, "title" | "color" | "completed"> {}
export interface IUpdateRequest extends Request<{ id: string }, {}, IUpdateRequestBody> {}

export interface IDestroyRequest extends Request<{ id: string }> {}

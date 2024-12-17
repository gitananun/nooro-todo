import { ErrorWithStatusCode } from "@/types";
import express from "express";

type StringAnyMap = {
  [key: string]: any;
};

export const sendResponse = (res: express.Response, statusCode: number, message: string, data?: StringAnyMap) => {
  res.status(statusCode).json({
    success: statusCode >= 200 && statusCode < 300,
    message,
    data,
  });
};

export const sendControllerErrorResponse = (res: express.Response, error: any, subject: string) => {
  const statusCode = error instanceof ErrorWithStatusCode ? error.code : 500;
  const message = error instanceof ErrorWithStatusCode ? error.message : `Error ${subject} --> ${error.message}`;

  sendResponse(res, statusCode, message);
};

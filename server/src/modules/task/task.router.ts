import express from "express";
import {
  controllerCreate,
  controllerDestroy,
  controllerIndex,
  controllerShow,
  controllerUpdate,
  middlewaresCreate,
  middlewaresUpdate,
} from ".";
import { middlewareValidParamsID } from "../../middlewares";

const router = express.Router();

export const taskRouter = (): express.Router => {
  router.get("/", controllerIndex);
  router.get("/:id", [middlewareValidParamsID], controllerShow);
  router.post("/", [middlewaresCreate], controllerCreate);
  router.put("/:id", [middlewareValidParamsID, middlewaresUpdate], controllerUpdate);
  router.delete("/:id", [middlewareValidParamsID], controllerDestroy);

  return router;
};

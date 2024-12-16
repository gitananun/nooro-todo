import express from "express";

const router = express.Router();

export default (): express.Router => {
  router.get("/ping", (_, res) => res.status(200).send("pong 🏓"));

  return router;
};

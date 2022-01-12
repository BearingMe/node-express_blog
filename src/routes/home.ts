import express from "express";
import * as homeController from "../controllers/homeController";

const router = express.Router();

router
  .route("/")
  .get(homeController.getReq);

export default router;

import express from "express";
import * as aboutController from "../controllers/aboutController";

const router = express.Router();

router
  .route("/")
  .get(aboutController.getReq);

export default router;

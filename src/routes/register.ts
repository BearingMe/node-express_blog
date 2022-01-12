import express from "express";
import * as registerController from "../controllers/registerController";
import registerSchema from "../forms/registerSchema";

const router = express.Router();

router
  .route("/")
  .get(registerController.getReq)
  .post(registerSchema, registerController.postReq);

export default router;

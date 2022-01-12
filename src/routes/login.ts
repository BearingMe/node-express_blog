import express from "express";
import * as loginController from "../controllers/loginController";
import loginSchema from "../forms/loginSchema";

const router = express.Router();

router
  .route("/")
  .get(loginController.getReq)
  .post(loginSchema, loginController.postReq);

export default router;

import express from "express";

import * as controller from "../controllers/auth.controller";
import * as validator from "../validators/auth.validator";

const router = express.Router();

router
  .route("/login")
  .get(controller.getLogin)
  .post(validator.loginSchema, controller.postLogin);

router
  .route("/register")
  .get(controller.getRegister)
  .post(validator.registerSchema, controller.postRegister);

export default router;

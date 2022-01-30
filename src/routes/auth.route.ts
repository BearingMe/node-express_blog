import express from "express";

import controllers from "../controllers";
import * as validator from "../validators/auth.validator";

const router = express.Router();

router
  .route("/login")
  .get(controllers.auth.getLogin)
  .post(validator.loginSchema, controllers.auth.postLogin);

router
  .route("/register")
  .get(controllers.auth.getRegister)
  .post(validator.registerSchema, controllers.auth.postRegister);

export default router;

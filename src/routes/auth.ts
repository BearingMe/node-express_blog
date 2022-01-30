import express from "express";

import controllers from "../controllers";
import validators from "../validators";

const router = express.Router();

router
  .route("/login")
  .get(controllers.auth.getLogin)
  .post(validators.auth.loginSchema, controllers.auth.postLogin);

router
  .route("/register")
  .get(controllers.auth.getRegister)
  .post(validators.auth.registerSchema, controllers.auth.postRegister);

export default router;

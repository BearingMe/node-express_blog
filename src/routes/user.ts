import express from "express";

import controllers from "../controllers";

const router = express.Router();

router
  .route("/")
  .get(controllers.user.getAccount);

export default router;

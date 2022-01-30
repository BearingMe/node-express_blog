import express from "express";

import * as controller from "../controllers/page.controller";

const router = express.Router();

router
  .route("/")
  .get(controller.getHome);

router
  .route("/about")
  .get(controller.getAbout);

export default router;

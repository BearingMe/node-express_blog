import express from "express";

import controllers from "../controllers";

const router = express.Router();

router
  .route("/:id?")
  .get(controllers.pages.getHome);

router
  .route("/about")
  .get(controllers.pages.getAbout);

router
  .route("/post/:id")
  .get(controllers.pages.getPost);

export default router;

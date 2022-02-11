import express from "express";

import controllers from "../controllers";
import validators from "../validators";

const router = express.Router();

router
  .route("/new")
  .get(controllers.posts.getCreate)
  .post(validators.posts.editSchema, controllers.posts.postCreate);

router
  .route("/update/:id")
  .get(controllers.posts.getUpdate)
  .post(validators.posts.editSchema, controllers.posts.postUpdate);

export default router;

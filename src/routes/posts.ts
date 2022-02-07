import express from "express";

import controllers from "../controllers";
import validators from "../validators";

const router = express.Router();

router
  .route("/new")
  .get(controllers.posts.getCreate)
  .post(validators.posts.editSchema, controllers.posts.postCreate);

export default router;

import express from "express";

import loginSchema from "../forms/loginSchema";

const router = express.Router();

router
  .route("/")
  .get((req: express.Request, res: express.Response) => {
    res.render("register", {title: "Register"});
  })
  .post(loginSchema, (req: express.Request, res: express.Response) => {
    res.redirect("/");
  });

export default router;
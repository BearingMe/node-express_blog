import express from "express";
import * as expressValidator from "express-validator";

import registerSchema from "../forms/registerSchema";

const router = express.Router();

router
  .route("/")
  .get((req: express.Request, res: express.Response) => {
    res.render("register", {title: "Register"});
  })
  .post(registerSchema, (req: express.Request, res: express.Response) => {
    const errors = expressValidator.validationResult(req);

    console.log(errors);

    if (!errors.isEmpty()) {
      res.render("register", {
        title: "Register",
        data: req.body,
        errors: errors.array(),
      });
    }

    else 
      res.redirect("/");
  });

export default router;
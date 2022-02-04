import type { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import models from "../../models";

// get request
export function getRegister(_: any, res: Response): void {
  const options = {
    title: "Register",
  };

  res.render("register", options);
  return;
}

// post request
export function postRegister(req: Request, res: Response): void {
  const errors = validationResult(req);
  const body = matchedData(req);

  const options = {
    title: "Register",
    errors: errors.array(),
    data: body,
  };

  if (!errors.isEmpty()) {
    res.render("register", options);

    return;
  }

  models.user
    .create({
      username: body.user,
      email: body.email,
      password: body.password1,
    })
    .then((user) => {
      req.session.token = user.tokenize();
      req.flash("success", "You have been registered successfully!");
      res.redirect("/");
    })
    .catch((err) => {
      res.render("register", { ...options, error: err.message });
    });
}

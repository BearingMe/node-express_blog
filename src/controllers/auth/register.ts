import type { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import models from "../../models";

// get request
export function getRegister(_: any, res: Response): void {
  res.render("register", { title: "Register" });
  return;
}

// post request
export function postRegister(req: Request, res: Response): void {
  const errors = validationResult(req);
  const { user, email, password1 } = matchedData(req);

  if (!errors.isEmpty()) {
    const errorsArray = errors.array();
    const errorsMsg = errorsArray.map((error) => error.msg);

    req.flash("error_message", errorsMsg);
    res.redirect("/auth/register");

    return;
  }

  models.user
    .create({
      username: user,
      email: email,
      password: password1,
    })
    .then(() => {
      req.flash("success_message", "You have been registered successfully!");
      res.redirect("/auth/login");
    })
    .catch((err) => {
      req.flash("error_message", err.message);
      res.redirect("/auth/register");
    });
}

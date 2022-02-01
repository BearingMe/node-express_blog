import type { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import models from "../../models";

// get request
export function getLogin(_: any, res: Response): void {
  const options = {
    title: "Login",
  };

  res.render("login", options);
  return;
}

// post request
export function postLogin(req: Request, res: Response): void {
  const errors = validationResult(req);
  const body = matchedData(req);

  const options = {
    title: "Login",
    errors: errors.array(),
    data: body,
  };

  if (!errors.isEmpty()) {
    res.render("login", options);

    return;
  }

  models.user
    .findOne({
      email: body.email,
    })
    .then((user) => {
      if (!user) {
        res.render("login", { ...options, error: "User not found" });
        return;
      }

      user.validatePassword(body.password1).then((valid: boolean) => {
        if (!valid) {
          res.render("login", { ...options, error: "Invalid password" });
          return;
        }

        req.session.token = user.tokenize();
        req.flash("success", "You are now logged in");
        res.redirect("/");
      });
    })
    .catch((err) => {
      console.log(err);
      res.render("login", { ...options, error: "Something went wrong" });
    });
}

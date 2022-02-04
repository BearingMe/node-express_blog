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
  
  else {
    models.user
      .findOne({ email: body.email })
      .then(async (user) => {
        // check if user exists
        if (!user) {
          throw new Error("User does not exist!");
        }

        // check if password is correct
        const isPasswordCorrect = await user.validatePassword(body.password1);
        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect!");
        }

        // create token and redirect to home
        req.session.token = user.tokenize();
        req.flash("success", "You are logged in");
        res.redirect("/");
      })
      .catch((err) => {
        res.render("login", { ...options, error: err.message });
      });

    return;
  }
}

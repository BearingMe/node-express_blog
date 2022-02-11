import type { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import models from "../../models";

// get request
export function getLogin(req: any, res: Response): void {
  res.render("login", { title: "Login" });
  return;
}

// post request
export function postLogin(req: Request, res: Response): void {
  const errors = validationResult(req);
  const { email, password1 } = matchedData(req);

  if (!errors.isEmpty()) {
    const errorsArray = errors.array();
    const errorsMsg = errorsArray.map((error) => error.msg);

    req.flash("error_message", errorsMsg);
    res.redirect("/auth/login");

    return;
  }

  models.user
    .findOne({ email: email })
    .then(async (user) => {
      if (!user) {
        throw new Error("User does not exist!");
      }

      // check if password is correct
      const isPasswordCorrect = await user.validatePassword(password1);

      
      if (!isPasswordCorrect) {
        throw new Error("Password is incorrect!");
      }
      
      // create token and redirect to home
      req.session.token = user.tokenize();
      req.flash("success_message", "You are logged in");
      res.redirect("/");
    })
    .catch((err) => {
      req.session.token = "";
      req.flash("error_message", err.message);
      console.log(err.message);
      // res.redirect("/auth/login");
    });
}

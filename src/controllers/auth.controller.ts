import type { Request, Response } from "express";
import * as validator from "express-validator";

export function getRegister(req: Request, res: Response) {
  res.render("register", { title: "Register" });
}

export function getLogin(req: Request, res: Response) {
  res.render("login", { title: "Login" });
}

export function postRegister(req: Request, res: Response) {
  const errors = validator.validationResult(req);
  const query = validator.matchedData(req);

  const options = {
    title: "Register",
    data: query,
    errors: errors.array(),
  };

  errors.isEmpty() ? res.redirect("/") : res.render("register", options);
}

export function postLogin(req: Request, res: Response) {
  const errors = validator.validationResult(req);
  const query = validator.matchedData(req);

  const options = {
    title: "Login",
    data: query,
    errors: errors.array(),
  };

  errors.isEmpty() ? res.redirect("/") : res.render("login", options);
}

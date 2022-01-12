import express from "express";
import * as validator from "express-validator";

export function getReq(_: express.Request, res: express.Response) {
  res.render("register", { title: "Register" });
}

export function postReq(req: express.Request, res: express.Response) {
  const errors = validator.validationResult(req);
  const options = {
    title: "Register",
    data: req.body,
    errors: errors.array(),
  };

  errors.isEmpty() ?
    res.redirect("/") :
    res.render("register", options);
}

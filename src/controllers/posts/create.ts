import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import models from "../../models";

export function getCreate(req: Request, res: Response) {
  const options = {
    title: "Create Post",
    user: req.user,
  };

  res.render("create_post", options);
}

export function postCreate(req: Request, res: Response) {
  const options = {
    title: "Create Post",
    user: req.user,
  };

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.render("create_post", { ...options, errors: errors.array() });
    return;
  }

  const body = matchedData(req);
  // funciona até aqui
}

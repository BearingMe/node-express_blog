import type { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import models from "../../models";

export function getAccount(req: Request, res: Response) {
  const options = {
    title: "User Account",
    success: req.flash("success")[0],
    error: req.flash("error")[0],
    user: req.user,
  };

  res.render("account", options);
}

export function postAccount(req: Request, res: Response) {
  const options = {
    title: "User Account",
    success: req.flash("success")[0],
    error: req.flash("error")[0],
    user: req.user,
  };

  const body = matchedData(req);
  const errors = validationResult(req);

  console.log(req.user);

  if (!errors.isEmpty()) {
    res.render("account", { ...options, errors: errors.array() });
    return;
  }

  const user = req.user as any;

  models.user
    .findByIdAndUpdate(
      user._id,
      {
        username: body.user,
        email: body.email,
        image: body.image,
      },
      {
        new: true,
        runValidators: true,
      }
    )
    .then((user) => {
      res.render("account", {
        ...options,
        success: "Account updated.",
        user: user,
      });
    })
    .catch((err) => res.render("account", { ...options, error: err.message }));
}

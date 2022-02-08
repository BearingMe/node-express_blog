import type { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import models from "../../models";

export function getAccount(req: Request, res: Response) {
  const options = {
    title: "User Account",
    user: req.user,
  };

  res.render("account", options);
}

export function postAccount(req: Request, res: Response) {
  const errors = validationResult(req);
  const { user: username, email, image } = matchedData(req);

  if (!errors.isEmpty()) {
    const errorsArray = errors.array();
    const errorsMsg = errorsArray.map((error) => error.msg);

    req.flash("error_message", errorsMsg);
    res.redirect("/user");

    return;
  }

  const query = (req.user as any)._id;
  
  const update = { username, email, image };

  const options = {
    new: true,
    runValidators: true,
  };

  models.user
    .findByIdAndUpdate(query, update, options)
    .then(() => {
      req.flash(
        "success_message",
        "Your account has been updated successfully!"
      );
      res.redirect("/user");
    })
    .catch((err) => {
      req.flash("error_message", err.message);
      res.redirect("/user");
    });
}

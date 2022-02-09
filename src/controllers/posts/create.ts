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
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorsArray = errors.array();
    const errorsMsg = errorsArray.map((error) => error.msg);
    req.flash("error_message", errorsMsg);
    res.redirect("/posts/new");
    return;
  }

  const { title, content } = matchedData(req);
  console.log(req.user)
  const author = (req.user);

  models.post
    .create({ title, content, author })
    .then((post) => {
      req.flash("success_message", "Post created successfully");
      res.redirect("/");
    })
    .catch((err) => {
      req.flash("error_message", err.message);
      res.redirect("/posts/new");
    });
}

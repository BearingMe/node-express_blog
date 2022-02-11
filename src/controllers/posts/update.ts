import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import models from "../../models";

export function getUpdate(req: Request, res: Response) {
  const options = {
    title: "Update Post",
    user: req.user,
  };

  const { id: postId } = req.params;

  models.post
    .findById(postId)
    .populate("author", "username image _id")
    .then((post) => {
      if (!post) {
        throw new Error("Post not found");
      }

      console.log(post);

      res.render("create_post", { post, ...options });
    })
    .catch((err) => {
      req.flash("error_message", err.message);
      res.redirect("/");
    });
}

export function postUpdate(req: Request, res: Response) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorsArray = errors.array();
    const errorsMsg = errorsArray.map((error) => error.msg);
    req.flash("error_message", errorsMsg);
    res.redirect("/");
    return;
  }

  const { title, content } = matchedData(req);
  const { id: postId } = req.params;
  console.log(req.user);
  const author = req.user;

  models.post
    .findByIdAndUpdate(postId, { title, content, author })
    .then((post) => {
      req.flash("success_message", "Post updated successfully");
      res.redirect("/");
    })
    .catch((err) => {
      req.flash("error_message", err.message);
      res.redirect("/");
    });
}

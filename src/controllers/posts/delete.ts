import { Request, Response } from "express";
import models from "../../models";

export function postDelete(req: Request, res: Response) {
  const { id: postId } = req.params;

  models.post
    .findByIdAndDelete(postId)
    .then((post) => {
      if (!post) {
        throw new Error("Post not found");
      }

      req.flash("success_message", "Post deleted successfully");
      res.redirect("/");
    })
    .catch((err: Error) => {
      req.flash("error_message", err.message);
      res.redirect("/");
    });

  return;
}


import { Request, Response } from "express";
import models from "../../models";

export function getPost(req: Request, res: Response) {
  const { id: postId } = req.params;
  const { userId } = req as any;

  models.post
    .findById(postId)
    .populate("author", "username image _id")
    .then((post) => {
      if (!post) {
        throw new Error("Post not found");
      }

      res.render("post", { post, userId });
    })
    .catch((err) => {
      req.flash("error_message", err.message);
      res.redirect("/");
    });
}

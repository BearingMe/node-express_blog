import type { Request, Response } from "express";
import models from "../../models";

export function getHome(req: Request, res: Response) {
  const options = {
    title: "Home",
    posts: [""],
  };

  models.post
    .find()
    .populate("author", "username")
    .then((posts: any) => {
      options.posts = posts;
      res.render("home", options);
    })
    .catch((err) => {
      console.log(err);
    });
}

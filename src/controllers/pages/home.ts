import type { Request, Response } from "express";
import models from "../../models";

export function getHome(req: Request, res: Response) {
  const { page } = req.params;

  const options = {
    title: "Home",
    posts: [""],
    postsLength: 0,
  };

  const pageNumber = parseInt(page, 10) || 1;

  console.log(pageNumber);

  const limit = 10;
  const offset = (pageNumber - 1) * limit;

  models.post
    .find()
    .populate("author", "username image")
    .sort({ createdAt: -1 })
    .then((posts: any) => {
      options.posts = posts;
      options.postsLength = posts.length;

      console.log(options.postsLength);

      res.render("home", options);
    })
    .catch((err) => {
      console.log(err);
    });
}

import type { Request, Response } from "express";
import posts from "../../data/posts";

export function getHome(req: Request, res: Response) {
  const options = {
    title: "Home",
    posts: posts
  };

  res.render("home", options);
}

import type { Request, Response } from "express";
import posts from "../../data/posts";

export function getHome(req: Request, res: Response) {
  const options = {
    title: "Home",
    posts: posts,
    success: req.flash("success")[0],
    error: req.flash("error")[0],
  };

  res.render("home", options);
}

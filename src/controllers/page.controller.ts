import type { Request, Response } from "express";
import posts from "../data/posts";

export function getHome(req: Request, res: Response) {
  res.render("home", { title: "Home", posts: posts });
}

export function getAbout(req: Request, res: Response) {
  res.render("about", { title: "About" });
}

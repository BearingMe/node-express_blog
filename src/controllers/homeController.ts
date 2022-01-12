import express from "express";
import posts from "../data/posts";

export function getReq(_: express.Request, res: express.Response) {
  res.render("home", { posts });
}

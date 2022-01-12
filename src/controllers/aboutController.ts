import express from "express";

export function getReq(_: express.Request, res: express.Response) {
  res.render("about", { title: "About" });
}

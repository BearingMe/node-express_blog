import express from "express";

export function getReq(_: express.Request, res: express.Response) {
  res.render("login", { title: "Login" });
}

export function postReq(_: express.Request, res: express.Response) {
  res.redirect("/");
}

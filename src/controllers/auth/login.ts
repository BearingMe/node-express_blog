import type { Request, Response } from "express";

// get request
export function getLogin(_: any, res: Response): void {
  const options = {
    title: "Login",
  };

  res.render("login", options);
  return;
}

// post request
export function postLogin(req: Request, res: Response): void {
  res.send("login");
  return;
}

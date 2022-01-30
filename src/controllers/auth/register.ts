import type { Request, Response } from "express";

// get request
export function getRegister(_: any, res: Response): void {
  const options = {
    title: "Register",
  };

  res.render("register", options);
  return;
}

// post request
export function postRegister(req: Request, res: Response): void {
  res.send("register");
  return;
}

import type { Request, Response } from "express";

export function getAccount(req: Request, res: Response) {
  const options = {
    title: "Home",
    success: req.flash("success")[0],
    error: req.flash("error")[0],
    user: req.user,
  };

  res.render("account", options);
}

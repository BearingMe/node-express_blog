import type { Request, Response } from "express";

export function getLogout(req: Request, res: Response): void {
  req.session.token = "";

  req.flash("success", "You have been logged out successfully!");
  res.redirect("/");
  return;
}

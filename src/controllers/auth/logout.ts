import type { Request, Response } from "express";

export function getLogout(req: Request, res: Response): void {
  req.session.token = "";

  req.flash("success_message", "You have been logged out successfully!");
  res.redirect("/");
  return;
}

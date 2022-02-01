import type { Request, Response } from "express";
// get request
export function getLogout(req: Request, res: Response): void {
  req.session.token = "";

  req.flash("success", "You have been logged out successfully!");
  res.redirect("/");
  return;
}

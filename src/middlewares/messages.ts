import type { Request, Response, NextFunction } from "express";

export function loadFlashMessages(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.locals.success_messages = req.flash("success_message");
  res.locals.error_messages = req.flash("error_message");

  console.log(res.locals.success_message);
  next();
}

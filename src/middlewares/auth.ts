import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import models from "../models";

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.session.token;
  const loginPath = "/auth/login";

  if (!token) {
    req.flash("error", "Please log in");
    res.redirect(loginPath);
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;

    models.user
      .findById(decoded.id)
      .then((user) => {
        if (!user) {
          req.flash("error", "User not found");
          res.redirect(loginPath);
          return;
        }

        req.user = user;
        next();
      })
      .catch((err) => {
        console.log(err);
        req.flash("error", "Something went wrong");
        res.redirect(loginPath);
      });
  } 
  
  catch (err) {
    req.flash("error", "Please log in");
    res.redirect(loginPath);
  }
}

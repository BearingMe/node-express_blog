import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import models from "../models";

export function decodeToken(req: Request, res: Response, next: NextFunction) {
  const token = req.session.token;

  if (!token) return next();

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET as string) as any;
    (req as any).userId = id;
  } 
  
  catch (err) {
    return next();
  }

  next();
}

// middleware to check if the user is authenticated
export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId } = req as any;
  const loginPath = "/auth/login";

  models.user
    .findById(userId)
    .then((user) => {
      if (!user) {
        throw new Error("User not found");
      }

      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
      req.flash("error_message", err.message);
      res.redirect(loginPath);
    });
}

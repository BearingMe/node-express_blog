import type { CookieOptions } from "express-session";

const cookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: "none",
  secure: process.env.NODE_ENV === "production",
  maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
};

export const session = {
  secret: process.env.SESSION_SECRET ?? "secret",
  resave: false,
  saveUninitialized: true,
  proxy: true,
  name: "DearAgony",
  cookie: cookieOptions,
};

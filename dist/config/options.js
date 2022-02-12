"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.session = void 0;
var cookieOptions = {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
};
exports.session = {
    secret: (_a = process.env.SESSION_SECRET) !== null && _a !== void 0 ? _a : "secret",
    resave: false,
    saveUninitialized: true,
    proxy: true,
    name: "DearAgony",
    cookie: cookieOptions,
};

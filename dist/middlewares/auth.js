"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = exports.decodeToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var models_1 = __importDefault(require("../models"));
function decodeToken(req, res, next) {
    var token = req.session.token;
    if (!token)
        return next();
    try {
        var id = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET).id;
        req.userId = id;
    }
    catch (err) {
        return next();
    }
    next();
}
exports.decodeToken = decodeToken;
// middleware to check if the user is authenticated
function ensureAuthenticated(req, res, next) {
    var userId = req.userId;
    var loginPath = "/auth/login";
    models_1.default.user
        .findById(userId)
        .then(function (user) {
        if (!user) {
            throw new Error("User not found");
        }
        req.user = user;
        next();
    })
        .catch(function (err) {
        console.log(err);
        req.flash("error_message", err.message);
        res.redirect(loginPath);
    });
}
exports.ensureAuthenticated = ensureAuthenticated;

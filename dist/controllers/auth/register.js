"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRegister = exports.getRegister = void 0;
var express_validator_1 = require("express-validator");
var models_1 = __importDefault(require("../../models"));
// get request
function getRegister(_, res) {
    res.render("register", { title: "Register" });
    return;
}
exports.getRegister = getRegister;
// post request
function postRegister(req, res) {
    var errors = (0, express_validator_1.validationResult)(req);
    var _a = (0, express_validator_1.matchedData)(req), user = _a.user, email = _a.email, password1 = _a.password1;
    if (!errors.isEmpty()) {
        var errorsArray = errors.array();
        var errorsMsg = errorsArray.map(function (error) { return error.msg; });
        req.flash("error_message", errorsMsg);
        res.redirect("/auth/register");
        return;
    }
    models_1.default.user
        .create({
        username: user,
        email: email,
        password: password1,
    })
        .then(function () {
        req.flash("success_message", "You have been registered successfully!");
        res.redirect("/auth/login");
    })
        .catch(function (err) {
        req.flash("error_message", err.message);
        res.redirect("/auth/register");
    });
}
exports.postRegister = postRegister;

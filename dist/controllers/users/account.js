"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAccount = exports.getAccount = void 0;
var express_validator_1 = require("express-validator");
var models_1 = __importDefault(require("../../models"));
function getAccount(req, res) {
    var options = {
        title: "User Account",
        user: req.user,
    };
    res.render("account", options);
}
exports.getAccount = getAccount;
function postAccount(req, res) {
    var errors = (0, express_validator_1.validationResult)(req);
    var _a = (0, express_validator_1.matchedData)(req), username = _a.user, email = _a.email, image = _a.image;
    if (!errors.isEmpty()) {
        var errorsArray = errors.array();
        var errorsMsg = errorsArray.map(function (error) { return error.msg; });
        req.flash("error_message", errorsMsg);
        res.redirect("/user");
        return;
    }
    var query = req.user._id;
    var update = { username: username, email: email, image: image };
    var options = {
        new: true,
        runValidators: true,
    };
    models_1.default.user
        .findByIdAndUpdate(query, update, options)
        .then(function () {
        req.flash("success_message", "Your account has been updated successfully!");
        res.redirect("/user");
    })
        .catch(function (err) {
        req.flash("error_message", err.message);
        res.redirect("/user");
    });
}
exports.postAccount = postAccount;

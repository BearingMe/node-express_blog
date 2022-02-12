"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCreate = exports.getCreate = void 0;
var express_validator_1 = require("express-validator");
var models_1 = __importDefault(require("../../models"));
function getCreate(req, res) {
    var options = {
        title: "Create Post",
        user: req.user,
    };
    res.render("create_post", options);
}
exports.getCreate = getCreate;
function postCreate(req, res) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        var errorsArray = errors.array();
        var errorsMsg = errorsArray.map(function (error) { return error.msg; });
        req.flash("error_message", errorsMsg);
        res.redirect("/posts/new");
        return;
    }
    var _a = (0, express_validator_1.matchedData)(req), title = _a.title, content = _a.content;
    console.log(req.user);
    var author = (req.user);
    models_1.default.post
        .create({ title: title, content: content, author: author })
        .then(function (post) {
        req.flash("success_message", "Post created successfully");
        res.redirect("/");
    })
        .catch(function (err) {
        req.flash("error_message", err.message);
        res.redirect("/posts/new");
    });
}
exports.postCreate = postCreate;

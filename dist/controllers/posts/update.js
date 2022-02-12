"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpdate = exports.getUpdate = void 0;
var express_validator_1 = require("express-validator");
var models_1 = __importDefault(require("../../models"));
function getUpdate(req, res) {
    var options = {
        title: "Update Post",
        user: req.user,
    };
    var postId = req.params.id;
    models_1.default.post
        .findById(postId)
        .populate("author", "username image _id")
        .then(function (post) {
        if (!post) {
            throw new Error("Post not found");
        }
        console.log(post);
        res.render("create_post", __assign({ post: post }, options));
    })
        .catch(function (err) {
        req.flash("error_message", err.message);
        res.redirect("/");
    });
}
exports.getUpdate = getUpdate;
function postUpdate(req, res) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        var errorsArray = errors.array();
        var errorsMsg = errorsArray.map(function (error) { return error.msg; });
        req.flash("error_message", errorsMsg);
        res.redirect("/");
        return;
    }
    var _a = (0, express_validator_1.matchedData)(req), title = _a.title, content = _a.content;
    var postId = req.params.id;
    console.log(req.user);
    var author = req.user;
    models_1.default.post
        .findByIdAndUpdate(postId, { title: title, content: content, author: author })
        .then(function (post) {
        req.flash("success_message", "Post updated successfully");
        res.redirect("/");
    })
        .catch(function (err) {
        req.flash("error_message", err.message);
        res.redirect("/");
    });
}
exports.postUpdate = postUpdate;

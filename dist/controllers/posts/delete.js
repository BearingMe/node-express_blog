"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDelete = void 0;
var models_1 = __importDefault(require("../../models"));
function postDelete(req, res) {
    var postId = req.params.id;
    models_1.default.post
        .findByIdAndDelete(postId)
        .then(function (post) {
        if (!post) {
            throw new Error("Post not found");
        }
        req.flash("success_message", "Post deleted successfully");
        res.redirect("/");
    })
        .catch(function (err) {
        req.flash("error_message", err.message);
        res.redirect("/");
    });
    return;
}
exports.postDelete = postDelete;

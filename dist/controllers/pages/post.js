"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPost = void 0;
var models_1 = __importDefault(require("../../models"));
function getPost(req, res) {
    var postId = req.params.id;
    var userId = req.userId;
    models_1.default.post
        .findById(postId)
        .populate("author", "username image _id")
        .then(function (post) {
        if (!post) {
            throw new Error("Post not found");
        }
        res.render("post", { post: post, userId: userId });
    })
        .catch(function (err) {
        req.flash("error_message", err.message);
        res.redirect("/");
    });
}
exports.getPost = getPost;

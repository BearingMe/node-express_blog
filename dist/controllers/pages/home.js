"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
var models_1 = __importDefault(require("../../models"));
function getHome(req, res) {
    var page = req.params.page;
    var options = {
        title: "Home",
        posts: [""],
        postsLength: 0,
    };
    var pageNumber = parseInt(page, 10) || 1;
    console.log(pageNumber);
    var limit = 10;
    var offset = (pageNumber - 1) * limit;
    models_1.default.post
        .find()
        .populate("author", "username image")
        .sort({ createdAt: -1 })
        .then(function (posts) {
        options.posts = posts;
        options.postsLength = posts.length;
        console.log(options.postsLength);
        res.render("home", options);
    })
        .catch(function (err) {
        console.log(err);
    });
}
exports.getHome = getHome;

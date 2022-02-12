"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("./auth"));
var pages_1 = __importDefault(require("./pages"));
var users_1 = __importDefault(require("./users"));
var posts_1 = __importDefault(require("./posts"));
exports.default = {
    auth: auth_1.default,
    pages: pages_1.default,
    user: users_1.default,
    posts: posts_1.default
};

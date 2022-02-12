"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var post_1 = __importDefault(require("./post"));
var user_1 = __importDefault(require("./user"));
exports.default = {
    post: post_1.default,
    user: user_1.default,
};

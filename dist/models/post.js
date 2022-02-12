"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var options = { timestamps: true };
var postSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        maxlength: 100,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
}, options);
exports.default = mongoose_1.default.model("Post", postSchema);

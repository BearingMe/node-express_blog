"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = __importDefault(require("../controllers"));
var router = express_1.default.Router();
router
    .route("/:id?")
    .get(controllers_1.default.pages.getHome);
router
    .route("/about")
    .get(controllers_1.default.pages.getAbout);
router
    .route("/post/:id")
    .get(controllers_1.default.pages.getPost);
exports.default = router;

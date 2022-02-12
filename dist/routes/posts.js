"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = __importDefault(require("../controllers"));
var validators_1 = __importDefault(require("../validators"));
var router = express_1.default.Router();
router
    .route("/new")
    .get(controllers_1.default.posts.getCreate)
    .post(validators_1.default.posts.editSchema, controllers_1.default.posts.postCreate);
router
    .route("/update/:id")
    .get(controllers_1.default.posts.getUpdate)
    .post(validators_1.default.posts.editSchema, controllers_1.default.posts.postUpdate);
router
    .route("/delete/:id")
    .post(controllers_1.default.posts.postDelete);
exports.default = router;

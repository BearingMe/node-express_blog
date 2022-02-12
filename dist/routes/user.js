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
    .route("/")
    .get(controllers_1.default.user.getAccount)
    .post(validators_1.default.auth.updateSchema, controllers_1.default.user.postAccount);
exports.default = router;

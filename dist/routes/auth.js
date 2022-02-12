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
    .route("/login")
    .get(controllers_1.default.auth.getLogin)
    .post(validators_1.default.auth.loginSchema, controllers_1.default.auth.postLogin);
router
    .route("/logout")
    .get(controllers_1.default.auth.getLogout);
router
    .route("/register")
    .get(controllers_1.default.auth.getRegister)
    .post(validators_1.default.auth.registerSchema, controllers_1.default.auth.postRegister);
exports.default = router;

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
var expressValidator = __importStar(require("express-validator"));
exports.registerSchema = expressValidator.checkSchema({
    // user input validation
    user: {
        exists: {
            errorMessage: "Username is required",
        },
        isLength: {
            options: { min: 3, max: 20 },
            errorMessage: "Username must be between 3 and 20 characters",
        },
    },
    // email input validation
    email: {
        exists: {
            errorMessage: "Email is required",
        },
        isEmail: {
            errorMessage: "Invalid email address",
        },
    },
    // password input validation
    password1: {
        exists: {
            errorMessage: "Password is required",
        },
        isLength: {
            options: { min: 8 },
            errorMessage: "Password must be at least 8 characters long",
        },
    },
    // password confirmation input validation
    password2: {
        exists: {
            errorMessage: "Password confirmation is required",
        },
        isLength: {
            options: { min: 8 },
            errorMessage: "Password must be at least 8 characters long",
        },
        custom: {
            options: function (value, _a) {
                var req = _a.req;
                if (value !== req.body.password1) {
                    throw new Error("Passwords do not match");
                }
                return true;
            },
        },
    },
});

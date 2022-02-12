"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("./login");
var register_1 = require("./register");
var update_1 = require("./update");
exports.default = {
    loginSchema: login_1.loginSchema,
    registerSchema: register_1.registerSchema,
    updateSchema: update_1.updateSchema
};

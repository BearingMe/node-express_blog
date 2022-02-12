"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("./login");
var register_1 = require("./register");
var logout_1 = require("./logout");
exports.default = {
    getLogin: login_1.getLogin,
    postLogin: login_1.postLogin,
    getRegister: register_1.getRegister,
    postRegister: register_1.postRegister,
    getLogout: logout_1.getLogout,
};

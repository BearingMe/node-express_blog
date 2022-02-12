"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
var update_1 = require("./update");
var delete_1 = require("./delete");
exports.default = {
    getCreate: create_1.getCreate,
    postCreate: create_1.postCreate,
    getUpdate: update_1.getUpdate,
    postUpdate: update_1.postUpdate,
    postDelete: delete_1.postDelete,
};

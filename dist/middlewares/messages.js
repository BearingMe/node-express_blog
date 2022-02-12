"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFlashMessages = void 0;
function loadFlashMessages(req, res, next) {
    res.locals.success_messages = req.flash("success_message");
    res.locals.error_messages = req.flash("error_message");
    next();
}
exports.loadFlashMessages = loadFlashMessages;

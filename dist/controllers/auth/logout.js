"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogout = void 0;
function getLogout(req, res) {
    req.session.token = "";
    req.flash("success_message", "You have been logged out successfully!");
    res.redirect("/");
    return;
}
exports.getLogout = getLogout;

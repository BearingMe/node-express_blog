"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbout = void 0;
function getAbout(_, res) {
    var options = {
        title: "About",
    };
    res.render("about", options);
    return;
}
exports.getAbout = getAbout;

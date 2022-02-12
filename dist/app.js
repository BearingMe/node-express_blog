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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// import libs
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var express_flash_1 = __importDefault(require("express-flash"));
var path_1 = __importDefault(require("path"));
// import files
var routes_1 = __importDefault(require("./routes"));
var middlewares = __importStar(require("./middlewares"));
var options = __importStar(require("./config/options"));
var db = __importStar(require("./config/db"));
// constants
var app = (0, express_1.default)();
var port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.set("trust proxy", 1);
// middlewares
app.use((0, express_session_1.default)(options.session));
app.use((0, express_flash_1.default)());
app.use(middlewares.loadFlashMessages);
app.use(middlewares.decodeToken);
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(function (req, res, next) {
    res.locals.isLoggedIn = Boolean(req.session.token);
    next();
});
// load view engine
app.set("view engine", "pug");
app.set("views", path_1.default.join(__dirname, "views"));
// load routes
app.use("/", routes_1.default.page);
app.use("/user/", middlewares.ensureAuthenticated, routes_1.default.user);
app.use("/auth/", routes_1.default.auth);
app.use("/posts/", middlewares.ensureAuthenticated, routes_1.default.posts);
// start server
app.listen(port, function () { return console.log("Listening on port ".concat(port)); });
// start database
db.connect(process.env.DB_URI);

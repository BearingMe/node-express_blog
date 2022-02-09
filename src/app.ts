// import libs
import "dotenv/config";
import express from "express";
import session from "express-session";
import flash from "express-flash";
import path from "path";

// import files
import routes from "./routes";
import * as middlewares from "./middlewares";
import * as options from "./config/options";
import * as db from "./config/db";

// import types
import type { Request, Response, NextFunction } from "express";

// constants
const app = express();
const port = process.env.PORT ?? 3000;

// middlewares
app.use(session(options.session));
app.use(flash());
app.use(middlewares.loadFlashMessages);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use((req: Request, res: Response, next: NextFunction) => {
  res.locals.isLoggedIn = Boolean(req.session.token);
  next();
});

// load view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// load routes
app.use("/", routes.page);
app.use("/user/", middlewares.ensureAuthenticated, routes.user);
app.use("/auth/", routes.auth);
app.use("/posts/", middlewares.ensureAuthenticated, routes.posts);

// start server
app.listen(port, () => console.log(`Listening on port ${port}`));

// start database
db.connect(process.env.DB_URI as string);

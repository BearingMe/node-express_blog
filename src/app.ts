// import libs
import "dotenv/config";
import express from "express";
import session from "express-session";
import flash from "express-flash";
import path from "path";

// import files
import routes from "./routes";
import * as middlewares from "./middlewares";
import * as config from "./config";
import * as db from "./db";

// constants
const app = express();
const port = process.env.PORT ?? 3000;

// middlewares
app.use(session(config.session));
app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  console.log(req.user);
  res.locals.msg = "hello";
  next();
});

// load view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// load routes
app.use("/", routes.page);
app.use("/user/", middlewares.ensureAuthenticated);
app.use("/auth/", routes.auth);

// start server
app.listen(port, () => console.log(`Listening on port ${port}`));

// start database
db.connect(process.env.DB_URI as string);

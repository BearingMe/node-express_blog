// import libs
import express from "express";
import session from "express-session";
import flash from "express-flash";
import path from "path";

// import files
import authRoute from "./routes/auth.route";
import pageRoute from "./routes/page.route";
import * as config from "./config";

// constants
const app = express();
const port = process.env.PORT ?? 3000;

// middlewares
app.use(session(config.session));
app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// load view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// load routes
app.use("/", pageRoute);
app.use("/auth/", authRoute);

// start server
app.listen(port, () => console.log(`Listening on port ${port}`));

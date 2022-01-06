// import libs
import express from "express";

// import files
import posts from "../data/posts";

// main program
const router = express.Router();

router.get(/^\/(home)?$/, (req, res) => {
  res.render("home", { posts });
});

export default router;

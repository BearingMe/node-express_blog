import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("about", { title: "About" });
});

export default router;

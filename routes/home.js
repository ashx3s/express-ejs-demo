const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Home",
    message: "Welcome to the home page",
  });
});

router.get("/about", (req, res) => {
  res.render("pages/about", {
    title: "About Us",
    description: "We are a company that does great things",
  });
});

module.exports = router;

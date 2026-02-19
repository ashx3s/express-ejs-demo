const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 29 },
    { id: 3, name: "Keyboard", price: 79 },
  ];

  res.render("pages/products", {
    title: "Our Products",
    products: products,
  });
});

module.exports = router;

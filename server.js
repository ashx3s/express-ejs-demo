const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const homeRoutes = require("./routes/home");
const productRoutes = require("./routes/products");

app.use("/", homeRoutes);
app.use("/products", productRoutes);

app.use((req, res) => {
  res.status(404).render("pages/404", { title: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

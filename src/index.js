const express = require("express");
const app = express();
const port = 3000;

// Integrate Pug with Express
app.set("view engine", "pug");

// Serve assets from 'static' folder
app.use(express.static("static"));

// Landing route
app.get("/", (req, res) => {
  res.render("index");
});

// Gallery route
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

// About route
app.get("/about", (req, res) => {
  res.render("about", { title: "Boring about page" });
});

// Sample API route
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Run server!
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

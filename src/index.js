const express = require("express");
const app = express();
const port = 3000;

// Landing route
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Sample API route
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Returns cities from the database
app.get("/cities", (req, res) => {
  // TODO
});

// Run server!
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require("express");
const app = express();
const port = 4000;
require('dotenv').config()

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/instagram", (req, res) => {
  res.send("chandandebsingha");
});

app.get("/login", (req, res) => {
  res.send("My login page");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

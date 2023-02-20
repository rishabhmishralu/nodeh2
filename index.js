const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("this is home page");
  res.end()
});

app.get("/about", (req, res) => {
  res.send(" this is about page");
});

app.get("/contact", (req, res) => {
  res.send("contact");
});

app.post("/submit", (rea, res) => {
    res.send("get if submit ")
    res.end()
});

app.listen(3001, () => {
  console.log("srever is 3001");
});

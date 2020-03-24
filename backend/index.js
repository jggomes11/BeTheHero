const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.json({
    event: "Semana Omnistack",
    message: "Hello World"
  });
});

app.listen(3333);

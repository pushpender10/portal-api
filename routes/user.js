const express = require("express");
const router = express.Router();
const HTTP_STATUS = require("./response-status-codes.js");

router.get("/user", (req, res) => {
  res.send("get user information.");
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  res.status(HTTP_STATUS["200_OK"]);
  res.send("Got the users.");
});

module.exports = router;

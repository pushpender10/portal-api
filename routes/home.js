const HTTP_STATUS = require("./response-status-codes");
const express = require("express");
const router = express.Router();

// About page route.
router.get("/about", function (req, res) {
  res.status(HTTP_STATUS["200_OK"]);
  res.send("About information");
});

// Home page route.
router.get("/", (req, res) => {
  res.send("get user information.");
});

module.exports = router;

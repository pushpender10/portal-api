require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;

//user router
const home = require("./routes/home.js");

//user router
const user = require("./routes/user.js");

app.use(express.urlencoded({ extended: true }));

app.use("/", home);
app.use("/user", user);

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`API server listening on PORT ${port}`);
});

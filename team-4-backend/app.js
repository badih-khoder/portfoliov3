var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var social_media = require("./routes/social-media");
var skills_route = require("./routes/skills");
var user_route = require("./routes/user");
var public = require("./routes/Public");
var work = require("./routes/my-work");
var app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/social-media", social_media);
app.use("/skills", skills_route);
app.use("/user", user_route);
app.use("/public", public);
app.use("/work", work);

mongoose
  .connect(process.env.CONNECTION_STRING, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfully connected");
  })
  .catch(console.error);

module.exports = app;

app.listen(5000, () => {
  console.log("your app is listen on port 5000");
});

var express = require("express");
var app = express.Router();
var controller_social_media = require("../controller/social-media");

app.get("/", controller_social_media.getAll);
app.get("/:id", controller_social_media.get);
app.post('/', controller_social_media.post);
app.put("/:id", controller_social_media.put);
// app.delete('/:id', controller_social_media.Delete);

module.exports = app;

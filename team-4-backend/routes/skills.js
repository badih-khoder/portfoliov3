var express = require('express');
var app = express.Router();
var skills_controller = require('../controller/skills');


app.get('/', skills_controller.getAll);
app.get('/:id', skills_controller.get);
// app.post('/', skills_controller.post);
app.put('/:id', skills_controller.put);


module.exports = app

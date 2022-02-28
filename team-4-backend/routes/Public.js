var express = require('express');
var app = express.Router();
var controller_public = require('../controller/public')

app.get('/', controller_public.getAll);
app.get('/:id', controller_public.get);
app.post('/', controller_public.post);
app.put('/:id', controller_public.put);
app.delete('/:id', controller_public.Delete);

module.exports = app
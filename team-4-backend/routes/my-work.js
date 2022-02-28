const express = require('express');
const my_work = require('../controller/my_work');
const app = express.Router();


app.get('/', my_work.getAll);
app.get('/:id', my_work.get);
app.put('/:id', my_work.put);
app.post('/', my_work.post);
app.delete('/:id', my_work.Delete)


module.exports = app
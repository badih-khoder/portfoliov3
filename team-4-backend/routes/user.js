const express =  require('express');
const user = require('../controller/social-media');
const app = express.Router();

app.get('/', user.getAll);
app.get('/:id', user.get);

module.exports = app
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
require('./routes/db');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routes.init(app);

module.exports = app;

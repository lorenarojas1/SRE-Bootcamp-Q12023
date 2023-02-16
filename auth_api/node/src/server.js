const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes');
// const cookieParser = require('cookie-parser');
require('./routes/db');

app.set('view engine', 'ejs');
app.use(express.static('public'));

dotenv.config({ path: '../env' });
// app.use(cookieParser);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routes.init(app);

module.exports = app;

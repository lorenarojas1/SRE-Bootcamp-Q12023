const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
//const cookieParse = require('cookie-parse');

const port = 8000;

app.set('view engine', 'ejs')
app.use(express.static('public'))

dotenv.config({path: './env'})
//app.use(cookieParse)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("listening at.. http://localhost:" + port);
});

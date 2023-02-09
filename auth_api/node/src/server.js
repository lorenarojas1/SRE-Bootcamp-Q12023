//import * as routes from './routes';

//const cookieParse = require('cookie-parse');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
//const router = express.Router();

const app = express();
const port = process.env.APP_PORT || 8000;
//const connectionDb = require('./config/db')
require('./config/db')

// setamos el motor de plantillas
app.set('view engine', 'ejs')

// seteamos la carpera public para archivos estaticos
app.use(express.static('public'))

//seteamos las variables de entorno
dotenv.config({path: './env'})

//app.use(cookieParse)

//llamar al router
app.use('/', require('./routes/index'))

//para procesar datos enviados desde forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//router.init(app);

/*app.get('/', (req, res) => {
    res.send('This is a example to connection a express server ' + process.env.APP_PORT )
  })*/

app.listen(port, () => {
  console.log("listening at.. http://localhost:" + port);
});





/*
const bodyParser = require('body-parser');

import * as routes from './routes';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routes.init(app);



export default app;*/

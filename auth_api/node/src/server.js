import express from 'express';
import cookieParser from 'cookie-parser';
import { init } from './routes';

const app = express();
const bodyParser = require('body-parser');
app.use(cookieParser());

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
init(app);

export default app;

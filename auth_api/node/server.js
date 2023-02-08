const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('This is a example to connection a express server')
  })

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

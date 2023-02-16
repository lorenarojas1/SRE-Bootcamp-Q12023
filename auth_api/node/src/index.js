const Config = require('./config/default.json');
const app = require('./server');

const config = Config;

app.listen(config.port, () => {
  console.log('listening at', config.port);
});

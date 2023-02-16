const loginController = require('./login');
const protect = require('./protected');
const healthController = require('../services/health');

exports.init = (app) => {
  app.get('/login', (req, res) => {
    res.render('login', { alert: false });
  });
  app.get('/protected', (req, res) => {
    res.send('protected');
  });
  app.post('/login', loginController.login);
  app.get('/health', healthController.health);
};

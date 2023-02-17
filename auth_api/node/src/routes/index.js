import login from './login';
import protect from './protected';
import  health from '../services/health';

exports.init = (app) => {
  app.get('/login', (req, res) => {
    res.render('login', { alert: false });
  });
  app.get('/protected', (req, res) => {
    res.send('protected');
  });
  app.post('/login', login);
  app.get('/health', health);
  app.get('/protected', protect);
};

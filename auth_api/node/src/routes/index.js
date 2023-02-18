import { health } from '../services/health';
import { protectFunction } from '../services/protected';
import { login } from './login';
import { pageProtected } from './protected';

export const init = (app) => {
  app.get('/login', (_, res) => {
    res.render('login', { alert: false });
  });
  app.get(
    '/protected',
    (req, res, next) => {
      const { jwt } = req.cookies;
      if (jwt) {
        protectFunction(jwt)
          .then((user) => {
            req.user = user;
            next();
          })
          .catch(() => {
            res.sendStatus(401);
          });
      } else {
        res.sendStatus(401);
      }
    },
    pageProtected
  );
  app.post('/login', login);
  app.get('/health', health);
};

import { health } from '../services/health';
// import { protectFunction } from '../services/protected';
import { login } from './login';
import { protectedRender } from './protected';

export const init = (app) => {
  app.get('/login', (_, res) => {
    res.render('login', { alert: false });
  });
  app.get('/protected', protectedRender);
  app.post('/login', login);
  app.get('/health', health);
};

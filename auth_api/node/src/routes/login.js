import { loginFunction } from '../services/login';
import { config } from '../config';

export const login = (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(401).render('login', {
        alert: true,
        alertTitle: 'Warnming',
        alertMessage: `Add a username and password Error: ${res.statusCode} - Unauthorized `,
        alertIcon: 'info',
        showConfirmButton: true,
        timer: false,
        ruta: 'login',
      });
    } else {
      loginFunction(username, password)
        .then(({ token }) => {
          const cookiesOptions = {
            expires: new Date(
              Date.now() + config.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          };
          res.cookie('jwt', token, cookiesOptions);
          res.render('login', {
            alert: true,
            alertTitle: 'Welcome...',
            alertMessage: 'Login successful!',
            alertIcon: 'success',
            showConfirmButton: false,
            timer: 800,
            ruta: 'health',
          });
        })
        .catch(() => {
          res.status(403).render('login', {
            alert: true,
            alertTitle: 'Warnming',
            alertMessage: `Username or/and password incorrect ${res.statusCode} - Forbidden `,
            alertIcon: 'info',
            showConfirmButton: true,
            timer: false,
            ruta: 'login',
          });
        });
    }
  } catch (error) {
    res.status(403).render('login', {
      alert: true,
      alertTitle: 'Warnming',
      alertMessage: `Username or/and password incorrect ${res.statusCode} - Forbidden `,
      alertIcon: 'info',
      showConfirmButton: true,
      timer: false,
      ruta: 'login',
    });
  }
};

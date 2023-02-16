const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const connectionDb = require('./db');

exports.login = (req, res) => {
  try {
    const { username } = req.body;
    const { password } = req.body;
    console.log(`${username} - ${password}`);

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
      connectionDb.query('SELECT * FROM users WHERE username = ?', [username], async (error, results) => {
        if (results.length === 0) {
          res.status(403).render('login', {
            alert: true,
            alertTitle: 'Warnming',
            alertMessage: `Username or/and password incorrect ${res.statusCode} - Forbidden `,
            alertIcon: 'info',
            showConfirmButton: true,
            timer: false,
            ruta: 'login',
          });
        } else {
          const passwordwithSalt = `${password}${results[0].salt}`;
          const hash = crypto.createHash('sha512');
          const data = hash.update(passwordwithSalt, 'uft-8');
          const generatedHash = data.digest('hex');
          console.log(generatedHash);

          if (generatedHash === results[0].password) {
            const { id } = results[0].role;
            const token = jwt.sign({ id }, 'my2w7wjd7yXF64FIADfJxNs1oupTGAuW', {
              expiresIn: '7d',
            });
            console.log(`TOKEN: ${token} User: ${username}`);

            const cookiesOptions = {
              expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
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
          } else {
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
        }
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

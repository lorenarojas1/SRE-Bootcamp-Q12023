import { config } from '../config';
import jwt from 'jsonwebtoken';
import db from '../routes/db';
import * as crypto from 'crypto';

exports.loginFunction = (username, password) => {
  const query = 'SELECT * FROM users WHERE username = ?';
  return new Promise((ok, reject) => {
    db.query(query, [username], (error, results) => {
      if (results.length === 0) {
        reject(new Error('403'));
      } else {
        const passwordwithSalt = `${password}${results[0].salt}`;
        const hash = crypto.createHash('sha512');
        const data = hash.update(passwordwithSalt, 'uft-8');
        const generatedHash = data.digest('hex');
        console.log(generatedHash);

        if (generatedHash === results[0].password) {
          const { id } = results[0].role;
          const token = jwt.sign({ id }, config.JWT_SECRET, {
            expiresIn: config.JWT_TIME_EXPIRES,
          });
          console.log(`TOKEN: ${token} User: ${username}`);

          ok({ token });
        } else {
          reject(new Error('403'));
        }
      }
    });
  });
};

import * as crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { findUserByUsername } from '../db/db';

export const loginFunction = (username, password) => {
  return new Promise((ok, reject) => {
    findUserByUsername(username)
      .then((user) => {
        const passwordwithSalt = `${password}${user.salt}`;
        const hash = crypto.createHash('sha512');
        const data = hash.update(passwordwithSalt, 'uft-8');
        const generatedHash = data.digest('hex');
        console.log(user);

        if (generatedHash === user.password) {
          const { role } = user;
          const token = jwt.sign({ role }, config.JWT_SECRET, { noTimestamp: true });
          ok({ token });
        }
      })
      .catch((error) => {
        console.log(error);
        reject(new Error('403'));
      });
  });
};

import jwt from 'jsonwebtoken';
import { config } from '../config';

export const protectFunction = (token) => {
  return new Promise((ok, reject) => {
    jwt.verify(token, config.JWT_SECRET, (err, user) => {
      if (err) {
        return reject(new Error('invalid token'));
      }
      ok(user);
    });
  });
};

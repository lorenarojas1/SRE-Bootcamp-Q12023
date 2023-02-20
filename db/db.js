"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUserByUsername = void 0;
var _connectionDb = require("../db/connectionDb");
const findUserByUsername = username => {
  const query = 'SELECT * FROM users WHERE username = ?';
  return new Promise((ok, reject) => {
    _connectionDb.db.query(query, [username], (error, results) => {
      if (error) {
        console.log(error);
        reject(new Error(error));
      }
      if (results.length === 0) {
        console.log('User not found');
        reject(new Error('User not found'));
      } else {
        const [user] = results;
        ok(user);
      }
    });
  });
};
exports.findUserByUsername = findUserByUsername;
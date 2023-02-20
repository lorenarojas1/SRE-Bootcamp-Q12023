"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protectFunction = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = require("../config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const protectFunction = token => {
  return new Promise((ok, reject) => {
    _jsonwebtoken.default.verify(token, _config.config.JWT_SECRET, (err, user) => {
      if (err) {
        return reject(new Error('invalid token'));
      }
      ok(user);
    });
  });
};
exports.protectFunction = protectFunction;
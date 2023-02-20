"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginFunction = void 0;
var crypto = _interopRequireWildcard(require("crypto"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = require("../config");
var _db = require("../db/db");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const loginFunction = (username, password) => {
  return new Promise((ok, reject) => {
    (0, _db.findUserByUsername)(username).then(user => {
      const passwordwithSalt = `${password}${user.salt}`;
      const hash = crypto.createHash('sha512');
      const data = hash.update(passwordwithSalt, 'uft-8');
      const generatedHash = data.digest('hex');
      console.log(user);
      if (generatedHash === user.password) {
        const {
          role
        } = user;
        const token = _jsonwebtoken.default.sign({
          role
        }, _config.config.JWT_SECRET, {
          noTimestamp: true
        });
        ok({
          token
        });
      }
    }).catch(error => {
      console.log(error);
      reject(new Error('403'));
    });
  });
};
exports.loginFunction = loginFunction;
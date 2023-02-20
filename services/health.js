"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.health = void 0;
const health = (req, res, next) => {
  res.render('health');
  next();
};
exports.health = health;
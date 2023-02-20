"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protectedRender = void 0;
var _protected = require("../services/protected");
const protectedRender = async (req, res, next) => {
  const {
    jwt
  } = req.cookies;
  if (jwt) {
    (0, _protected.protectFunction)(jwt).then(user => {
      req.user = user;
      res.render('protected');
      next();
    }).catch(() => {
      res.sendStatus(403).render('forbidden');
    });
  } else {
    res.status(403).render('forbidden');
  }
};
exports.protectedRender = protectedRender;
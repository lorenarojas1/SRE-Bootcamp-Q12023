"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;
var _health = require("../services/health");
var _login = require("./login");
var _protected = require("./protected");
// import { protectFunction } from '../services/protected';

const init = app => {
  app.get('/login', (_, res) => {
    res.render('login', {
      alert: false
    });
  });
  app.get('/protected', _protected.protectedRender);
  app.post('/login', _login.login);
  app.get('/health', _health.health);
};
exports.init = init;
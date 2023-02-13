const express = require('express');
const router = express.Router();
const login = require('../services/login');
const protect = require('./protected');
const health =require ('../services/health');

router.get('/', (req, res) => {
  res.render('index')
});

  router.get('/login', (req, res) => {
    res.render('login', {alert: false})
  });
  router.get('/protected', (req, res) => {
    res.send('protected')
  });
  router.get('/health', (req, res) => {
    res.send('health')
  });

  router.get('/login', login);

module.exports = router;
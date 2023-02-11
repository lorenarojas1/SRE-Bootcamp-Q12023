const login = require('./login');
const protect = require('./protected');
const health =require ('../services/health');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index')
});

  router.get('/login', (req, res) => {
    res.render('login')
  });
  router.get('/protected', (req, res) => {
    res.send('protected')
  });
  router.get('/health', (req, res) => {
    res.send('health')
  });

module.exports = router;
const login = require('./login');
const protect = require('./protected');
const health =require ('../services/health');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('index')
});

  router.get('/login', (req, res) => {
    res.send('login')
  });
  router.get('/protected', (req, res) => {
    res.send('protected')
  });
  router.get('/health', (req, res) => {
    res.send('health')
  });

  // router.post('/login', login);
  // router.get('/protected', protect);
  // router.get('/_health', health);


module.exports = router;
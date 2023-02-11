const loginFunction = require('../services/login');

const login = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
 
  let response = {
    "data": loginFunction(username, password)
  };
  res.send(response);
  next();
}

module.exports = login
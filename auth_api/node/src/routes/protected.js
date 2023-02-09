const protectFunction = require('../services/protected');

const protect = (req, res, next) => {
  let authorization = req.headers.authorization;
  let response = {
    "data": protectFunction(authorization)
  };
  res.send(response, 'protected');
  next();
}

module.exports = protect;
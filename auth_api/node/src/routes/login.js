const loginFunction = require('../services/login');

const login = async (req, res, next) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    const loginResponse = await loginFunction(username, password);

    if(loginResponse.success){
      res.estatus(201).send({data: loginResponse.data});
      next();
      return;
    }
  } catch (error) {

  }



}

module.exports = login
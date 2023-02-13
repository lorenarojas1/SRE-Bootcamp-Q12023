const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const connectionDb = require('../config/db');
const {promisify} = require('util');


const loginFunction = (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;

    if(!username || !password){
      res.render('login', {
        alert: true,
        alertTitle: 'Warnming',
        alertMessage: "Add a username and password",
        alertIcon: "info",
        showConfirmButton: true,
        timer: false,
        ruta: 'login',
      })
    }else{
      connectionDb.query('SELECT * FROM users WHERE user = ?', [user], async (error, results) => {
        if(results.length == 0 || ! (await bcryptjs.compare(pass, results[0].pass))){
          res.render('login', {
            alert: true,
            alertTitle: 'Warnming',
            alertMessage: "Add a username and password",
            alertIcon: "info",
            showConfirmButton: true,
            timer: false,
            ruta: 'login',
          })
        }else{
          const id = results[0].id;
          const token = jwt.sign({id:id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_TIME_EXPIRES
          })
          console.log('TOKEN: ' + token + 'User: ' + user)

          const cookiesOptions = {
            expires: new Date(Date.now() + processenv.JWT_COOKIES_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true
          }
          res.cookie('jwt', token. cookiesOptions)
          res.render('login', {
            alert: true,
            alertTitle: 'Welcome...',
            alertMessage: "Login successful!",
            alertIcon: "success",
            showConfirmButton: false,
            timer: 800,
            ruta: '',
          })
        }
      })
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = loginFunction;
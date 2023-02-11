let mysql = require('mysql');

let connectionDb = mysql.createConnection({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

connectionDb.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos ');
  });
  
  connectionDb.query('SELECT * from users', function(error, results, fields){
    if(error)
    throw error
  
    results.forEach(results => {
      console.log(results)
    })
  })


module.exports = connectionDb


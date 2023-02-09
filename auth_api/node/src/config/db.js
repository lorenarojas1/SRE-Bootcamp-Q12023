let mysql = require('mysql');

let connectionDb = mysql.createConnection({
    host: 'sre-bootcamp-selection-challenge.cabf3yhjqvmq.us-east-1.rds.amazonaws.com',
    user: 'secret',
    password: 'jOdznoyH6swQB9sTGdLUeeSrtejWkcw',
    database: 'bootcamp_tht',
    port: 3306
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


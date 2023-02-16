const mysql = require('mysql');

const connectionDb = mysql.createConnection({
  host: 'sre-bootcamp-selection-challenge.cabf3yhjqvmq.us-east-1.rds.amazonaws.com',
  user: 'secret',
  password: 'jOdznoyH6swQB9sTGdLUeeSrtejWkcw',
  database: 'bootcamp_tht',
  port: 3306,
});

connectionDb.connect((err, res) => {
  if (err) {
    console.error(`Error de conexion: ${err.stack}`);
    return;
  }
  console.log(`Conectado a la base de datos ${res}`);
});

module.exports = connectionDb;

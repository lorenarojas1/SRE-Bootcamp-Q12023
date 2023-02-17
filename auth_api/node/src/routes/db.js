const mysql = require('mysql');
const { config } = require('../config');

const initDb = () => {
  const dbParams = {
    host: config.DB_HOSTNAME,
    user: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    port: config.DB_PORT,
  };
  const connectionDb = mysql.createConnection(dbParams);

  connectionDb.connect((err, res) => {
    if (err) {
      console.error(`Error de conexion: ${err.stack}`);
      return;
    }
    console.log(`Conectado a la base de datos ${res}`);
  });
  return connectionDb;
};
const db = initDb();

module.exports = db;

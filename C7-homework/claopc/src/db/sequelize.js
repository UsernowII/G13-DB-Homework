//Se configuran los parámetros de conexión a la BD
const { Sequelize } = require('sequelize');
const env = require('../config/env.js')

const { databaseDB, usernameDB, passwordDB,  hostDB,  dialect, portDB } = env;

const sequelize = new Sequelize(databaseDB, usernameDB, passwordDB, {
    host: hostDB,
    dialect: dialect,   /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    port: portDB,  /*El puerto por defecto es 5432*/
    logging: false,  /* Permite ver los query que se ejecutaron con sequelize.query */
  });

  sequelize.query(`
    CREATE TABLE IF NOT EXISTS Artists (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      bio VARCHAR(255),
      photoUrl VARCHAR(255)
    );
  `).then(() => console.log('Artists table created'))
    .catch(err => console.error('Error creating Artists table:', err));
  
  sequelize.query(`
    CREATE TABLE IF NOT EXISTS Songs (
      id SERIAL PRIMARY KEY,
      title VARCHAR(50),
      artistId INTEGER,
      releaseYear INTEGER,
      duration INTEGER,
      coverUrl VARCHAR(255),
      FOREIGN KEY (id) REFERENCES Artists(id)
    );
  `).then(() => console.log('Songs table created'))
    .catch(err => console.error('Error creating Songs table:', err));  
  
  //Se exporta el objeto de la conexión
  module.exports = {
    sequelize,
  };
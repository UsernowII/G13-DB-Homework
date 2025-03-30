const { Sequelize } = require("sequelize");
const env = require("../config/env");

const { databaseDB, dialect, hostDB, usernameDB, passwordDB, portDB } = env;

const sequelize = new Sequelize(databaseDB, usernameDB, passwordDB, {
    host: hostDB,
    dialect: dialect,
    port: portDB,
    logging: false,
});

sequelize
    .query(
        `
    CREATE TABLE IF NOT EXISTS Artists (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      bio VARCHAR(255),
      photoUrl VARCHAR(255)
    );
  `
    )
    .then(() => console.log("Astists table created!!!"))
    .catch((err) => console.error("Error creating artists table:", err));

sequelize
    .query(
        `
    CREATE TABLE IF NOT EXISTS Songs (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255),
      artistId INTEGER,
      releaseYear INTEGER,
      duration INTEGER,
      coverUrl VARCHAR(255),
      FOREIGN KEY (artistId) REFERENCES Artists(id) ON DELETE CASCADE
    );
  `
    )
    .then(() => console.log("Songs table created!!!"))
    .catch((err) => console.error("Error creating songs table:", err));

module.exports = {
    sequelize,
};

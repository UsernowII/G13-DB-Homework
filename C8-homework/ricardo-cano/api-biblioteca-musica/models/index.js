const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/database')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Artists = require('./artist')(sequelize, Sequelize);
db.Song = require('./song')(sequelize, Sequelize);

module.exports = db;
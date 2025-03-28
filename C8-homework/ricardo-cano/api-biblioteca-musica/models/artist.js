// module.exports = (sequelize, DataTypes) => {
//   const Artist = sequelize.define('Artist', {
//     name: DataTypes.STRING,
//     bio: DataTypes.TEXT,
//     photoUrl: DataTypes.STRING,
//   }, {
//     tableName: 'artists',
//   });
//   return Artist;
// };

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artist = sequelize.define('Artist', {
  name: DataTypes.STRING,
  bio: DataTypes.TEXT,
  photoUrl: DataTypes.STRING,
});

module.exports = Artist;
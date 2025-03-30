// module.exports = (sequelize, DataTypes) => {
//   const Song = sequelize.define('Song', {
//     title: DataTypes.STRING,
//     artistId: DataTypes.INTEGER,
//     releaseYear: DataTypes.INTEGER,
//     duration: DataTypes.INTEGER,
//     coverUrl: DataTypes.STRING,
//   }, {
//     tableName: 'songs',
//   });
//   return Song;
// };

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Artist = require('./artist');

const Song = sequelize.define('Song', {
  title: DataTypes.STRING,
  releaseYear: DataTypes.INTEGER,
  duration: DataTypes.INTEGER,
  coverUrl: DataTypes.STRING,
});

Song.belongsTo(Artist, { foreignKey: 'artistId' });
Artist.hasMany(Song, { foreignKey: 'artistId' });

module.exports = Song;
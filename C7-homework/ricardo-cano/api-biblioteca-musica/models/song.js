module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
    releaseYear: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    coverUrl: DataTypes.STRING,
  }, {
    tableName: 'songs',
  });
  return Song;
};
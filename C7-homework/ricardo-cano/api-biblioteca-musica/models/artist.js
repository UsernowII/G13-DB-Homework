module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    bio: DataTypes.TEXT,
    photoUrl: DataTypes.STRING,
  }, {
    tableName: 'artists',
  });
  return Artist;
};
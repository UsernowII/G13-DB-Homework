
module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
      title: { type: DataTypes.STRING, allowNull: false },
      artistId: { type: DataTypes.INTEGER, allowNull: false },
      releaseYear: { type: DataTypes.INTEGER },
      duration: { type: DataTypes.INTEGER },
      coverUrl: { type: DataTypes.STRING }
    }, {});
    Song.associate = (models) => {
      Song.belongsTo(models.Artist, { foreignKey: 'artistId' });
    };
    return Song;
  };
  
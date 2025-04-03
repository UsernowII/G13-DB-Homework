module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define('Artist', {
      name: { type: DataTypes.STRING, allowNull: false },
      bio: { type: DataTypes.TEXT, allowNull: false },
      photoUrl: { type: DataTypes.STRING }
    }, {});
    return Artist;
  };
  
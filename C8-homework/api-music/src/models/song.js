import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Artist from './artist.js';

const Song = sequelize.define('Song', {
  title: { type: DataTypes.STRING, allowNull: false },
  releaseYear: { type: DataTypes.INTEGER, allowNull: false },
  duration: { type: DataTypes.INTEGER, allowNull: false },
  coverUrl: { type: DataTypes.STRING, allowNull: true },
});

Song.belongsTo(Artist, { foreignKey: 'artistId', onDelete: 'CASCADE' });
Artist.hasMany(Song, { foreignKey: 'artistId' });

export default Song;
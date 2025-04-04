import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

const song = sequelize.define(
    "song",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artistId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        releaseYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        coverUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
);

song.sync();

export default song;

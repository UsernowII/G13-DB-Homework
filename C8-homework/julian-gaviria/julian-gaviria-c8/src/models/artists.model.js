import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

const artist = sequelize.define(
    "artist",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photoUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

artist.sync({ alter: true });

export default artist;

// `sequelize.define` also returns the model
if (artist === sequelize.models.artist) {
    console.log("Model artist created!!");
} // true

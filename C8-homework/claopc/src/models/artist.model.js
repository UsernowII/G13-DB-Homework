import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/sequelize.js";

export class Artist extends Model {};

Artist.init(
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
        }
    },
    {
        sequelize,
        modelName: 'artist'   
    },
);


//Artist.sync({ force: true });

console.log(Artist === sequelize.models.artist); // true

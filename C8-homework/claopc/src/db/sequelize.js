import { Sequelize } from 'sequelize';
import env from '../config/env.js';

const {databaseDB, usernameDB, passwordDB, hostDB, dialect, portDB} = env;

export const sequelize = new Sequelize(databaseDB, usernameDB, passwordDB, {
    host: hostDB,
    dialect: dialect,
    port: portDB,    
    logging: (msg) => {
      console.log('Sequelize: ', msg)
    },
});

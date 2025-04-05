console.log("Holi mundo")

import env from './config/env.js';
import { Server} from './server.js';

import { sequelize} from './db/sequelize.js';
import musicRoutes from './routes/musicroutes.js';

//Se importan los modelos

import { Artist } from './models/artist.model.js';
console.log('artist: ', Artist);

async function main() { 

    try {
        await sequelize.authenticate();
        console.log('Connection has been established succesfully')

        await sequelize.sync({ force: true });
        console.log('All models were synchronized successfully.');

        const server = new Server(env.port, musicRoutes);
        server.start();
        
    } catch (error) {
        console.error('Unable to connect to the database', error)        
    }    
}

main();

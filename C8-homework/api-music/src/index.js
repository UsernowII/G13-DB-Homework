import express from 'express';
import sequelize from './config/database.js';
import artistRoutes from './routes/artists.js';
import songRoutes from './routes/songs.js';


const app = express();
app.use(express.json());

app.use('/artists', artistRoutes);
app.use('/songs', songRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log('Database connected successfully');
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
import { Router } from 'express';
import { ArtistController } from '../controllers/artist.controller.js';

const router = Router();
const controller = new ArtistController;

router.get('/artists', controller.get);
  
  //Obtener un producto por su id GET/artists/:id
  router.get('/artists/:id', controller.getById)
  
  router.post('/artists', controller.create);
  
  router.put('/artists/:id', controller.update);
  
  router.delete('/artists/:id', controller.delete);

export default router;
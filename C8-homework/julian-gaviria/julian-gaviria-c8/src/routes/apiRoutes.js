import { Router } from "express";
const router = Router();

import { apiController } from "../controllers/api.controller.js";

const controller = new apiController();

// Obtener todos los CANCIONES
router.get("/songs", controller.getSongs);
// Obtener todos los CANCIONES por id
router.get("/songs/:songsId", controller.getSongsbyId);
// Obtener todos los Artistas
router.get("/artists", controller.getArtists);
// Obtener un Artista por ID
router.get("/artists/:artistId", controller.getArtistsbyId);
//añadir una nueva cancion
router.post("/songs", controller.createSong);
// Añadir una nueva artista
router.post("/artists", controller.createArtist);

router.put("/songs/:songId", controller.updateSong);

// Actualizar un artistas
router.put("/artists/:artistId", controller.updateArtist);

// Eliminar un cancion por ID
router.delete("/songs/:songId", controller.deleteSong);

// Eliminar un artista por ID
router.delete("/artists/:artistId", controller.deleteArtist);

export default router;

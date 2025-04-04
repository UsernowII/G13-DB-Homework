const express = require('express');
const router = express.Router();
const db = require('../models'); 
const Song = db.Song; 


router.get('/', async (req, res) => {
  try {
    console.log(db); // Verifica que `Song` esté en el objeto `db`
console.log(db.Song); // Esto debe mostrar el modelo correctamente
    const songs = await Song.findAll();
    res.json(songs);
  } catch (error) {
    console.error('Error al obtener las canciones:', error)
    res.status(500).json({ error: 'Error al obtener las songs'
     });
  }
});

module.exports = router;
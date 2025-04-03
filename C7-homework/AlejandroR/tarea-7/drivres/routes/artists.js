const express = require('express');
const router = express.Router();
const { Artist } = require('../models');

router.get('/', async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los artistas' });
  }
});

module.exports = router;
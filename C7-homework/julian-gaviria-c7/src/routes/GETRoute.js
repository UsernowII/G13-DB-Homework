const express = require("express");
const router = express.Router();
const { sequelize } = require("../db/sequelize.js");
const { SELECT } = require("sequelize/lib/query-types");
const QueryTypes = require("sequelize/lib/query-types");

// Obtener todos los CANCIONES
router.get("/songs", async (req, res) => {
    try {
        const songs = await sequelize.query("SELECT * from songs;", {
            type: sequelize.QueryTypes.SELECT,
        });
        res.send(songs);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal server error!!" });
    }
});

// Obtener todos los Artistas
router.get("/artists", async (req, res) => {
    try {
        const artists = await sequelize.query("SELECT * from artists;", {
            type: sequelize.QueryTypes.SELECT,
        });
        res.send(artists);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal server error!!" });
    }
});

// Obtener un Artista por ID
router.get("/artists/:productId", async (req, res) => {
    try {
        const id = parseInt(req.params.productId);

        const [product] = await sequelize.query(
            "SELECT * FROM artists where id = :id",
            {
                type: sequelize.QueryTypes.SELECT,
                replacements: { id },
            }
        );

        if (!product) {
            return res.status(404).json({ msg: "Artista no encontrado!!" });
        }

        res.json({ msg: "El Artista buscado es:", product });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal server error!!" });
    }
});

module.exports = router;

import { Router } from "express";
const router = Router();
import { sequelize } from "../db/sequelize.js";

// Eliminar un cancion por ID
router.delete("/songs/:songId", async (req, res) => {
    try {
        const id = parseInt(req.params.songId);

        const [song] = await sequelize.query(
            "DELETE FROM songs  WHERE id = :id RETURNING *;",
            {
                type: sequelize.QueryTypes.DELETE,
                replacements: { id },
            }
        );
        if (!song || song.length === 0) {
            return res.status(404).json({ msg: "Cancion no encontrado!!" });
        }

        res.status(200).json({
            message: "Cancion Eliminada con éxito!",
        });
        res.json(song[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal server error!!" });
    }
});

// Eliminar un artista por ID
router.delete("/artists/:artistId", async (req, res) => {
    try {
        const id = parseInt(req.params.artistId);

        const [song] = await sequelize.query(
            "DELETE FROM artists  WHERE id = :id RETURNING *;",
            {
                type: sequelize.QueryTypes.DELETE,
                replacements: { id },
            }
        );
        if (!song || song.length === 0) {
            return res.status(404).json({ msg: "Astista no encontrado!!" });
        }

        res.status(200).json({
            message: "Astista Eliminado con éxito!",
        });
        res.json(song[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal server error!!" });
    }
});

export default router;

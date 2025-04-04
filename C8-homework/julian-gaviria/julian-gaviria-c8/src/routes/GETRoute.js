import { Router } from "express";
const router = Router();

// Obtener todos los CANCIONES
router.get("/songs", controller.getSongs);

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

export default router;

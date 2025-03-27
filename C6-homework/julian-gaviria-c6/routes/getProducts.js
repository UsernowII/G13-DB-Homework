const express = require("express");
const router = express.Router();
const { products } = require("../products");

// Obtener todos los productos
router.get("/products", (req, res) => {
    res.json(products);
});

// Obtener un producto por ID
router.get("/products/:productId", (req, res) => {
    const id = parseInt(req.params.productId);
    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({ msg: "Producto no encontrado!!" });
    }

    res.json({ msg: "El producto buscado es:", product });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { products } = require("../products");

// Actualizar un producto
router.put("/products/:productId", (req, res) => {
    const id = parseInt(req.params.productId);
    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({ msg: "Producto no encontrado!!" });
    }

    product.name = req.body.name ?? product.name;
    product.price = req.body.price ?? product.price;
    product.category = req.body.category ?? product.category;
    product.description = req.body.description ?? product.description;

    res.status(200).json({
        message: "Producto modificado con éxito!",
        product,
    });
});

module.exports = router;

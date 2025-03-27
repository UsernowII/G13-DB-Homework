const express = require("express");
const router = express.Router();
const { products } = require("../products");

// Eliminar un producto por ID
router.delete("/products/:productId", (req, res) => {
    const id = parseInt(req.params.productId);
    const productIndex = products.findIndex((prod) => prod.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ msg: "Producto no encontrado!!" });
    }

    const [deletedProduct] = products.splice(productIndex, 1);

    res.json({ message: "Producto eliminado!!", deletedProduct });
});

module.exports = router;

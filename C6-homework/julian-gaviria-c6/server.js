//Tarea numero 6 hecha por Julian Gaviria grupo 13
const express = require("express");
const app = express();
const port = 5000;
const { products } = require("../julian-gaviria-c6/products");

app.use(express.json());

//METODOS leer, READ
app.get("/", (req, res) => {
    res.send(`ECUCHANDO EN EL PUERTO ${port}`);
});
//BUSCAR todos los productos
app.get("/products", (req, res) => {
    res.json(products);
});

//BUSCAR PRODUCTO POR ID
app.get("/products/:poductId", (req, res) => {
    const id = parseInt(req.params.poductId);

    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({ msg: "Producto no encontrado!!" });
    }
    res.json({ msg: "El producto buscado es: ", product });
});

//METODO POST, AÑADIR
app.post("/products", (req, res) => {
    if (
        !req.body.name ||
        !req.body.price ||
        !req.body.category ||
        !req.body.description
    ) {
        return res
            .status(400)
            .send(
                "Debe ingresar el productos con todos los campos requeridos(precio, nombre, categoria y despcricion)"
            );
    }
    const product = {
        id: products[products.length - 1].id + 1,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
    };
    products.push(product);
    res.status(201).json({ message: "Producto añadido con exito!", product });
});

//ACTUALIZAR, PUT, UPDATE
app.put("/products/:productId", (req, res) => {
    const id = parseInt(req.params.productId);

    const product = products.find((p) => p.id === id);
    if (!product) {
        return res.status(404).json({ msg: "Producto no encontrado!!" });
    }

    product.name = req.body.name ?? product.name;
    product.price = req.body.price;
    product.category = req.body.category ?? product.category;
    product.description = req.body.description;

    res.status(201).json({
        message: "Producto modificado con exito!",
        product,
    });
});

//DELETE, BORRAR
app.delete("/products/:productId", (req, res) => {
    const id = parseInt(req.params.productId);

    const productIndex = products.findIndex((prod) => prod.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ msg: "Producto no encontrado!!" });
    }

    const [product] = products.splice(productIndex, 1);

    res.json({
        msg: "Producto eliminado!! el producto eliminado fue: ",
        product,
    });
});

//escuchando el puerto
app.listen(port, () => {
    console.log("escuchando en el puerto", port);
});

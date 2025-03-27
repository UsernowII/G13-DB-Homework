const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [
  {
    id: 1,
    name: 'Laptop',
    price: 1000,
    category: 'Electronics',
    description: 'A high performance laptop',
  },
  {
    id: 2,
    name: 'Coffee Mug',
    price: 10,
    category: 'Kitchenware',
    description: 'A ceramic coffee mug',
  },
];


const validateProduct = (req, res, next) => {
  const { name, price, category, description } = req.body;
  if (!name || !category || !description || price <= 0) {
    return res.status(400).json({ message: 'Datos inválidos. Todos los campos son requeridos y el precio debe ser mayor que 0.' });
  }
  next();
};

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

app.post('/products', validateProduct, (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/products/:id', validateProduct, (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex !== -1) {
    products[productIndex] = {
      ...products[productIndex],
      ...req.body,
    };
    res.json(products[productIndex]);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
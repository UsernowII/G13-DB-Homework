# API REST de Productos

API para gestionar productos usando Node.js y Express.

## Cómo Iniciar

1.  Clona el repositorio.
2.  Ejecuta `npm install`.
3.  Ejecuta `node index.js`.

## Rutas

* **GET /products:** Lista de productos.
* **GET /products/:id:** Producto por ID.
* **POST /products:** Crear producto.
* **PUT /products/:id:** Actualizar producto.
* **DELETE /products/:id:** Eliminar producto.

## Usando Postman

* Prueba las rutas con Postman.
* Ejemplo POST:

    ```json
    {
      "name": "Smartphone",
      "price": 500,
      "category": "Electronics",
      "description": "A modern smartphone"
    }
    ```

* Captura de pantalla:

    ![Captura Postman](![](image.png))

## Usando curl

* Ejemplo GET: `curl http://localhost:3000/products`
* Ejemplo POST:
    `curl -X POST -H "Content-Type: application/json" -d '{ "name": "Smartphone", "price": 500, "category": "Electronics", "description": "A modern smartphone" }' http://localhost:3000/products`

## Notas

* Datos en memoria (se pierden al reiniciar).
* Validación de datos en POST y PUT.
* Manejo de errores HTTP.
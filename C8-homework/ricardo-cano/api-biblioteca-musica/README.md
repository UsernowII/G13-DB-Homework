# API de Biblioteca de Música con Express y Sequelize

Este proyecto es una API RESTful desarrollada con Node.js, Express y Sequelize para gestionar una biblioteca de música almacenada en una base de datos PostgreSQL.

## Descripción

La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en dos entidades:

* **Artistas:** Almacena información sobre los artistas musicales.
* **Canciones:** Almacena información sobre las canciones, incluyendo su relación con los artistas.

## Tecnologías Utilizadas

* Node.js
* Express.js
* Sequelize (ORM para PostgreSQL)
* PostgreSQL
* dotenv
* Postman (para probar la API)

## Prerrequisitos

* Node.js y npm instalados.
* PostgreSQL instalado y configurado.
* Postman instalado (opcional, para realizar las pruebas).

## Instalación

1.  Clona este repositorio:

    ```bash
    git clone
    cd music-library-api
    ```

2.  Instala las dependencias:

    ```bash
    npm install
    ```

3.  Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno de la base de datos:

    ```
    DB_HOST=localhost
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=nombre_de_tu_base_de_datos
    DB_PORT=5432
    ```

4.  Ejecuta las migraciones de Sequelize para crear las tablas en la base de datos:

    ```bash
    npx sequelize-cli db:migrate
    ```

5.  Inicia el servidor:

    ```bash
    node server.js
    ```

## Endpoints de la API

### Artistas

* `POST /artists`: Crea un nuevo artista.
* `GET /artists`: Obtiene todos los artistas.
* `PUT /artists/:id`: Actualiza un artista existente.
* `DELETE /artists/:id`: Elimina un artista existente.

### Canciones

* `POST /songs`: Crea una nueva canción.
* `GET /songs`: Obtiene todas las canciones.
* `PUT /songs/:id`: Actualiza una canción existente.
* `DELETE /songs/:id`: Elimina una canción existente.

## Uso

Puedes utilizar Postman o cualquier otra herramienta similar para probar los endpoints de la API.

## Estructura del Proyecto

music-library-api/
├── config/
│   └── database.js
├── models/
│   ├── artist.js
│   └── song.js
├── server.js
├── .env
├── package.json
└── README.md

* `config/database.js`: Contiene la configuración de la base de datos y la instancia de Sequelize.
* `models/`: Contiene los modelos de Sequelize para las entidades de la base de datos.
* `server.js`: Contiene la lógica principal de la API.
* `.env`: Contiene las variables de entorno de la base de datos.
* `package.json`: Contiene las dependencias del proyecto.
* `README.md`: Este archivo.

## Consideraciones Adicionales

* Se implementó el manejo de errores para las solicitudes a la API.
* Se utilizó Sequelize para interactuar con la base de datos PostgreSQL.
* Se implementaron las relaciones entre las tablas `Artists` y `Songs`.
* Las operaciones CRUD se realizan utilizando los métodos `find`, `findAll`, `create`, `update` y `destroy` de Sequelize.
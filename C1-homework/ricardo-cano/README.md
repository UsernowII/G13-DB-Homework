# Modelos Entidad-Relación (ER)

## Objetivo
El objetivo de esta tarea es practicar la creación de modelos entidad-relación (ER) para representar diferentes escenarios. Se han creado diagramas ER básicos y complejos para afianzar los conceptos aprendidos sobre bases de datos relacionales.

## Puntos de la Tarea

### Punto 1: Modelo ER Básico - Pet Store (sin relaciones)

#### Descripción
Se creó un modelo entidad-relación para una tienda de mascotas que gestiona información sobre las mascotas. La entidad principal es **Pet**, que incluye los siguientes atributos:

- **Pet_ID**: Identificador único para cada mascota (clave primaria).
- **Name**: Nombre de la mascota.
- **Species**: Especie de la mascota (perro, gato, etc.).
- **Breed**: Raza de la mascota.
- **Age**: Edad de la mascota.

#### Diagrama
![Modelo ER - Pet Store](G13-DB-Homework\C1-homework\ricardo-cano\Punto 1 Modelo ER Básico - Pet Store (sin relaciones).png)

---

### Punto 2: Modelo ER Básico - Library

#### Descripción
Se creó un modelo entidad-relación para una biblioteca que gestiona información sobre libros y autores. Las entidades son **Book** y **Author**, con la siguiente relación:

- **Book**:
  - **Book_ID**: Identificador único para cada libro (clave primaria).
  - **Title**: Título del libro.
  - **Genre**: Género del libro.
  - **Publication_Date**: Fecha de publicación del libro.

- **Author**:
  - **Author_ID**: Identificador único para cada autor (clave primaria).
  - **Name**: Nombre del autor.
  - **Nationality**: Nacionalidad del autor.

**Relación**: Un autor puede escribir uno o más libros, y cada libro tiene un único autor (1 a N).

#### Diagrama
![Modelo ER - Library](G13-DB-Homework\C1-homework\ricardo-cano\Punto 2 Modelo ER Básico - Library.png)

---

### Punto 3: Modelo ER Complejo - Hotel Reservation System

#### Descripción
Se creó un modelo entidad-relación para un sistema de reservas de hotel que gestiona información sobre clientes, habitaciones y reservas. Las entidades son **Customer**, **Room**, y **Reservation**, con las siguientes relaciones:

- **Customer**:
  - **Customer_ID**: Identificador único para cada cliente (clave primaria).
  - **Name**: Nombre del cliente.
  - **Email**: Correo electrónico del cliente.
  - **Phone**: Número de teléfono del cliente.

- **Room**:
  - **Room_ID**: Identificador único para cada habitación (clave primaria).
  - **Number**: Número de la habitación.
  - **Type**: Tipo de habitación (individual, doble, suite, etc.).
  - **Price**: Precio de la habitación.

- **Reservation**:
  - **Reservation_ID**: Identificador único para cada reserva (clave primaria).
  - **Start_Date**: Fecha de inicio de la reserva.
  - **End_Date**: Fecha de finalización de la reserva.
  - **Customer_ID**: Identificador del cliente (clave foránea).
  - **Room_ID**: Identificador de la habitación (clave foránea).

**Relaciones**:
- Un cliente puede tener una o más reservas, pero una reserva pertenece a un único cliente (1 a N).
- Una habitación puede ser reservada múltiples veces, pero cada reserva está asociada a una única habitación (1 a N).

#### Diagrama
![Modelo ER - Hotel Reservation System](G13-DB-Homework\C1-homework\ricardo-cano\Punto 3 Modelo ER Complejo - Hotel Reservation System.png)

---

## Conclusión
Se han creado modelos entidad-relación para diferentes escenarios, lo que permite entender mejor cómo se estructuran las bases de datos relacionales. Cada diagrama incluye las entidades y sus relaciones, proporcionando una representación visual clara de la información gestionada.

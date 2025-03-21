1. *Modelo ER Pet-Store*
Este modelo representa una tienda de mascotas donde se almacenan datos de cada mascota registrada en el sistema. No hay relaciones en este diagrama, ya que se trata de un modelo básico sin dependencias entre entidades.

2. *Modelo ER Library*
Un autor puede escribir uno o más libros, y cada libro tiene un único autor.
Author (1) ↔ (N) Book
Este modelo representa una biblioteca donde se gestiona información sobre libros y autores. Se establece una relación uno a muchos (1:N) entre Author y Book, indicando que un autor puede escribir varios libros, pero un libro solo tiene un autor.

3. *Modelo Hotel Reservation System*
Un cliente puede tener una o más reservas, pero una reserva pertenece a un único cliente.
Customer (1) ↔ (N) Reservation
Una habitación puede ser reservada múltiples veces, pero cada reserva está asociada a una única habitación.
Room (1) ↔ (N) Reservation
Este modelo representa un sistema de reservas de hotel, donde se almacenan los clientes, las habitaciones y las reservas realizadas. Se observa que la entidad Reservation actúa como tabla intermedia para conectar clientes y habitaciones, permitiendo que una habitación sea reservada varias veces en diferentes momentos.



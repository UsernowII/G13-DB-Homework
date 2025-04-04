Punto 1: Generar Reportes con SELECT:

   - Reporte 1: Seleccionar todos los libros publicados por 'Penguin Books'.

      SELECT book.Title, book.Genre, book.Publication_Year
      FROM Book book
      JOIN Publisher publisher ON book.Publisher_ID = publisher.Publisher_ID
      WHERE publisher.Name = 'Penguin Books';

   - Reporte 2: Seleccionar todos los libros publicados después del año 1950.

     SELECT Title, Genre, Publication_Year
     FROM Book
     WHERE Publication_Year > 1950;
   
   - Reporte 3: Seleccionar los nombres de los autores que han escrito libros de género 'Fantasy' utilizando una subconsulta.

     SELECT author.Name
     FROM Author author
     WHERE author.Author_ID IN (
      SELECT book_author.Author_ID
      FROM Book_Author book_author
      JOIN Book book ON book_author.Book_ID = book.Book_ID
      WHERE book.Genre = 'Fantasy'
     ); 
     
   - Reporte 4: Seleccionar los títulos de los libros escritos por autores cuyo nombre contiene 'J.K.' utilizando una subconsulta.

      SELECT book.Title
      FROM Book book
      WHERE book.Book_ID IN (
         SELECT book_author.Book_ID
         FROM Book_Author book_author
         JOIN Author author ON book_author.Author_ID = author.Author_ID
         WHERE author.Name LIKE '%J.K.%'
      );
     
   - (Opcional) Reporte 5: Utilizando una subconsulta, seleccionar los títulos de los libros escritos por autores británicos.

      SELECT book.Title
      FROM Book book
      WHERE book.Book_ID IN (
         SELECT book_author.Book_ID
         FROM Book_Author book_author
         JOIN Author author ON book_author.Author_ID = author.Author_ID
         WHERE author.Nationality = 'British'
      );

Punto 2: Modificar Información con UPDATE:

   - Actualizar el género del libro '1984' a 'Science Fiction'.

      UPDATE Book
      SET Genre = 'Science Fiction'
      WHERE Title = '1984';

   - Cambiar la nacionalidad de 'Mark Twain' a 'Canadian'.

      UPDATE Author
      SET Nationality = 'Canadian'
      WHERE Name = 'Mark Twain';

Punto 3: Eliminar Información con DELETE:

   - Eliminar el libro 'Pride and Prejudice' de la base de datos.

     DELETE FROM Book
     WHERE Title = 'Pride and Prejudice';

   - Eliminar los autores que no han escrito ningún libro. 

       DELETE FROM Author
      WHERE Author_ID NOT IN (
      SELECT DISTINCT Author_ID
      FROM Book_Author
   );
   
Punto 1: Generar Reportes con JOINs
   - Reporte 1: Usar INNER JOIN para seleccionar los títulos de los libros junto con el nombre de su editorial.

      SELECT book.Title, publisher.Name AS Publisher
      FROM Book book
      INNER JOIN Publisher publisher ON book.Publisher_ID = publisher.Publisher_ID;

   - Reporte 2: Usar LEFT JOIN para seleccionar todos los autores y los títulos de los libros que han escrito, incluyendo autores que no han escrito ningún libro.

      SELECT author.Name AS Author, book.Title
      FROM Author author
      LEFT JOIN Book_Author book_author ON author.Author_ID = book_author.Author_ID
      LEFT JOIN Book book ON book_author.Book_ID = book.Book_ID;
   
   - Reporte 3: Usar RIGHT JOIN para seleccionar todos los libros y los nombres de los autores que los han escrito, incluyendo libros que no tienen autores asociados.

     SELECT book.Title, author.Name AS Author
     FROM Book book
     RIGHT JOIN Book_Author book_author ON book.Book_ID = book_author.Book_ID
     RIGHT JOIN Author author ON book_author.Author_ID = author.Author_ID;

   - Reporte 4: Usar una combinación de INNER JOIN y LEFT JOIN para seleccionar todos los libros, sus autores, y la editorial, incluyendo libros que no tienen autores y aquellos sin editorial.

      SELECT book.Title, author.Name AS Author, publisher.Name AS Publisher
      FROM Book book
      INNER JOIN Publisher publisher ON book.Publisher_ID = publisher.Publisher_ID
      LEFT JOIN Book_Author book_author ON book.Book_ID = book_author.Book_ID
      LEFT JOIN Author author ON book_author.Author_ID = author.Author_ID;

   - Reporte 5: Usar INNER JOIN para seleccionar todos los libros que han sido escritos por más de un autor y mostrar el título del libro junto con los nombres de los autores.

      SELECT book.Title, author.Name AS Author
      FROM Book book
      INNER JOIN Book_Author book_author ON book.Book_ID = book_author.Book_ID
      INNER JOIN Author author ON book_author.Author_ID = author.Author_ID
      WHERE book.Book_ID IN (
         SELECT book.Book_ID
         FROM Book book
         INNER JOIN Book_Author book_author ON book.Book_ID = book_author.Book_ID
         GROUP BY book.Book_ID
         HAVING COUNT(book_author.Author_ID) > 1
      )
   


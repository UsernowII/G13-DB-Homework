-- Reporte 1: Usar INNER JOIN para seleccionar los títulos de los libros
--  junto con el nombre de su editorial.

SELECT Book.Title, Publisher.Name AS PublisherName
FROM Book
INNER JOIN Publisher ON Book.Publisher_ID = Publisher.Publisher_ID;


-- Reporte 2: Usar LEFT JOIN para seleccionar todos los autores y los títulos de los libros que han escrito,
--  incluyendo autores que no han escrito ningún libro.

SELECT Author.Name AS AuthorName, Book.Title AS BookTitle
FROM Author
LEFT JOIN Book_Author ON Author.Author_ID = Book_Author.Author_ID
LEFT JOIN Book ON Book_Author.Book_ID = Book.Book_ID;


-- Reporte 3: Usar RIGHT JOIN para seleccionar todos los libros y los nombres de los autores que los han escrito, 
-- incluyendo libros que no tienen autores asociados.

SELECT Book.Title AS BookTitle, Author.Name AS AuthorName
FROM Book_Author
RIGHT JOIN Book ON Book_Author.Book_ID = Book.Book_ID
LEFT JOIN Author ON Book_Author.Author_ID = Author.Author_ID;

-- Reporte 4: Usar una combinación de INNER JOIN y LEFT JOIN para seleccionar todos los libros, sus autores,
--  y la editorial, incluyendo libros que no tienen autores y aquellos sin editorial.

SELECT Book.Title AS BookTitle, Author.Name AS AuthorName, Publisher.Name AS PublisherName
FROM Book
LEFT JOIN Book_Author ON Book.Book_ID = Book_Author.Book_ID
LEFT JOIN Author ON Book_Author.Author_ID = Author.Author_ID
LEFT JOIN Publisher ON Book.Publisher_ID = Publisher.Publisher_ID;

-- Reporte 5: Usar INNER JOIN para seleccionar todos los libros que han sido escritos por más de un autor 
-- y mostrar el título del libro junto con los nombres de los autores.

SELECT Book.Title AS BookTitle, STRING_AGG(Author.Name, ', ') AS Authors
FROM Book
INNER JOIN Book_Author ON Book.Book_ID = Book_Author.Book_ID
INNER JOIN Author ON Book_Author.Author_ID = Author.Author_ID
GROUP BY Book.Title
HAVING COUNT(Book_Author.Author_ID) > 1;

-- Reporte 6 (Opcional): Usar INNER JOIN, LEFT JOIN, y GROUP BY para seleccionar la editorial que tiene más 
-- libros publicados, junto con el número total de libros y los títulos de esos libros.

SELECT Publisher.Name AS PublisherName, COUNT(Book.Book_ID) AS TotalBooks, STRING_AGG(Book.Title, ', ') AS BookTitles
FROM Publisher
INNER JOIN Book ON Publisher.Publisher_ID = Book.Publisher_ID
GROUP BY Publisher.Name
ORDER BY TotalBooks DESC
LIMIT 1;
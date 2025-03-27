--Tarea hecha por Julian Gaviria
--Generar Reportes con JOINs

--Reporte 1: Usar INNER JOIN para seleccionar los títulos de los libros junto con el nombre de su editorial.
SELECT Book.Title, Publisher.Name AS publisher_name  
FROM Book  
INNER JOIN Publisher ON Book.Publisher_ID = Publisher.Publisher_ID;

--Reporte 2: Usar LEFT JOIN para seleccionar todos los autores y los títulos de los libros que han escrito, incluyendo autores que no han escrito ningún libro.
SELECT Author.Name AS author_name, Book.Title AS Book_Title  
FROM Author  
LEFT JOIN book_author ON Author.Author_ID = book_author.Author_ID  
LEFT JOIN Book ON Book_Author.Book_ID = Book.Book_ID;

--Reporte 3: Usar RIGHT JOIN para seleccionar todos los libros y los nombres de los autores que los han escrito, incluyendo libros que no tienen autores asociados.
SELECT Book.Title AS Book_Title, Author.Name AS author_name  
FROM Book  
RIGHT JOIN Book_Author ON Book.Book_ID = book_author.Book_ID  
RIGHT JOIN Author ON Book_Author.Author_ID = Author.Author_ID;

--Reporte 4: Usar una combinación de INNER JOIN y LEFT JOIN para seleccionar todos los libros, sus autores, y la editorial, incluyendo libros que no tienen autores y aquellos sin editorial.
SELECT 
    Book.Title AS Book_Title, 
    Author.Name AS author_name, 
    Publisher.Name AS publisher_name
FROM Book  
LEFT JOIN Book_Author ON Book.Book_ID = Book_Author.Book_ID  
LEFT JOIN Author ON Book_Author.Author_ID = Author.Author_ID  
LEFT JOIN Publisher ON Book.Publisher_ID = Publisher.Publisher_ID;


--Reporte 5: Usar INNER JOIN para seleccionar todos los libros que han sido escritos por más de un autor y mostrar el título del libro junto con los nombres de los autores.
SELECT B.Title AS Book_Title, A.Name AS author_name  
FROM book_author BA  
INNER JOIN Book B ON BA.Book_ID = B.Book_ID  
INNER JOIN Author A ON BA.Author_ID = A.Author_ID  
WHERE BA.Book_ID IN (
    SELECT Book_ID  
    FROM book_author  
    GROUP BY Book_ID  
    HAVING COUNT(Author_ID) > 1
);
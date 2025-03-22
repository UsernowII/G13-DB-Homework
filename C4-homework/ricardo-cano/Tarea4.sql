
-- Punto 1: Generar Reportes con SELECT

-- Reporte 1: Seleccionar todos los libros publicados por 'Penguin Books'.
SELECT Title 
FROM Book 
WHERE Publisher_ID = (SELECT Publisher_ID FROM Publisher WHERE Name = 'Penguin Books');

-- Reporte 2: Seleccionar todos los libros publicados después del año 1950.
SELECT Title 
FROM Book 
WHERE Publication_Year > 1950;

-- Reporte 3: Seleccionar los nombres de los autores que han escrito libros de género 'Fantasy' 
-- utilizando una subconsulta.
SELECT DISTINCT a.Name 
FROM Author a 
WHERE a.Author_ID IN (SELECT ba.Author_ID 
                       FROM Book_Author ba 
                       JOIN Book b ON ba.Book_ID = b.Book_ID 
                       WHERE b.Genre = 'Fantasy');


-- Reporte 4: Seleccionar los títulos de los libros escritos por autores
--  cuyo nombre contiene 'J.K.' utilizando una subconsulta.
SELECT Title 
FROM Book 
WHERE Book_ID IN (SELECT ba.Book_ID 
                    FROM Book_Author ba 
                    JOIN Author a ON ba.Author_ID = a.Author_ID 
                    WHERE a.Name LIKE '%J.K.%');


-- Reporte 5: Utilizando una subconsulta, seleccionar los títulos de los libros 
-- escritos por autores británicos. 
SELECT Title 
FROM Book 
WHERE Book_ID IN (SELECT ba.Book_ID 
                   FROM Book_Author ba 
                   JOIN Author a ON ba.Author_ID = a.Author_ID 
                   WHERE a.Nationality = 'British');



-- Punto 2: Modificar Información con UPDATE

-- Actualizar el género del libro '1984' a 'Science Fiction'.
UPDATE Book 
SET Genre = 'Science Fiction' 
WHERE Title = '1984';

-- Cambiar la nacionalidad de 'Mark Twain' a 'Canadian'.
UPDATE Author 
SET Nationality = 'Canadian' 
WHERE Name = 'Mark Twain';



-- Punto 3: Eliminar Información con DELETE

-- Eliminar el libro 'Pride and Prejudice' de la base de datos.
DELETE FROM Book 
WHERE Title = 'Pride and Prejudice';

-- Eliminar los autores que no han escrito ningún libro.kc
DELETE FROM Author 
WHERE Author_ID NOT IN (SELECT DISTINCT Author_ID FROM Book_Author);

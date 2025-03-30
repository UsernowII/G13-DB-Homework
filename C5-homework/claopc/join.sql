--Punto 1: Generar Reportes con JOINs

-- Reporte 1: Usar INNER JOIN para seleccionar los títulos de los libros junto con el nombre de su editorial.
SELECT a.Title, b.Name
	FROM Book a
	INNER JOIN Publisher b
	ON a.Publisher_ID = b.Publisher_ID;

-- Reporte 2: Usar LEFT JOIN para seleccionar todos los autores y los títulos de los libros que han escrito, incluyendo autores que no han escrito ningún libro.	
SELECT a.Name AS Autores, b.Title AS Nombre_Libro
	FROM Author a
	LEFT JOIN Book_Author ba 
	ON a.Author_ID = ba.Author_ID
		LEFT JOIN Book b 
		ON ba.Book_ID = b.Book_ID;

-- Reporte 3: Usar RIGHT JOIN para seleccionar todos los libros y los nombres de los autores que los han escrito, incluyendo libros que no tienen autores asociados.		
SELECT b.Title AS Nombre_Libro, a.Name AS Autores
	FROM Book b
	RIGHT JOIN Book_Author ba
	ON b.Book_ID = ba.Book_ID
		RIGHT JOIN Author a
		ON ba.Author_ID = a.Author_ID;

-- Reporte 4: Usar una combinación de INNER JOIN y LEFT JOIN para seleccionar todos los libros, sus autores, y la editorial, incluyendo libros que no tienen autores y aquellos sin editorial.
SELECT b.Title AS Nombre_Libro, a.Name AS Autores, e.Name AS Editorial
   FROM Book b
   		INNER JOIN Book_Author ba
		ON b.Book_ID = ba.Book_ID
			LEFT JOIN Author a
			ON a.Author_ID = ba.Author_ID
			LEFT JOIN Publisher e
			ON b.Publisher_ID = e.Publisher_ID;

--Reporte 5: Usar INNER JOIN para seleccionar todos los libros que han sido escritos por más de un autor y mostrar el título del libro junto con los nombres de los autores.			
SELECT b.Title AS Nombre_Libro, a.Name 
	FROM Book b
		INNER JOIN Book_Author ba
		ON b.Book_ID = ba.Book_ID
			INNER JOIN Author a
			ON ba.Author_ID = a.Author_ID
				WHERE b.Book_ID IN(
				SELECT Book_ID
					FROM Book_Author
					GROUP BY Book_ID
					HAVING COUNT(Author_ID) > 1
				);

				

		
--Punto 1: Generar Reportes con SELECT

--Reporte 1: Seleccionar todos los libros publicados por 'Penguin Books'.
SELECT Title 
    FROM Book
    WHERE Publisher_ID =
        (SELECT Publisher_ID
            FROM Publisher
            WHERE Name = 'Penguin Books');

--Reporte 2: Seleccionar todos los libros publicados después del año 1950.
SELECT Title
	FROM Book
	WHERE Publication_Year > 1950;

-- Reporte 3: Seleccionar los nombres de los autores que han escrito libros de género 'Fantasy' utilizando una subconsulta.
SELECT Name 
	FROM Author
	WHERE Author_ID IN
		(SELECT Author_ID 
			FROM Book_Author
			WHERE Book_ID IN
				(SELECT Book_ID
					FROM Book
					WHERE Genre = 'Fantasy'
				)
		);	

-- Reporte 4: Seleccionar los títulos de los libros escritos por autores cuyo nombre contiene 'J.K.' utilizando una subconsulta.
SELECT Title
	FROM Book
	WHERE Book_ID =
		(SELECT Book_ID
			FROM Book_Author
			WHERE Author_ID =
				(SELECT Author_ID
					FROM Author
					WHERE Name LIKE '%J.K%'
				)
		);

-- Reporte 5: Utilizando una subconsulta, seleccionar los títulos de los libros escritos por autores británicos. 
SELECT Title
	FROM Book
	WHERE Book_ID IN
		(SELECT Book_ID
			FROM Book_Author
			WHERE Author_ID IN
				(SELECT Author_ID
					FROM Author
					WHERE Nationality = 'British'
				)
		);
-- Punto 3: Eliminar Información con DELETE

-- Eliminar el libro 'Pride and Prejudice' de la base de datos.
-- Se elimina primero la FK:
DELETE FROM Book_Author
	WHERE Book_ID =
	(SELECT Book_ID FROM Book
		WHERE Title = 'Pride and Prejudice');

-- Luego se procede a eliminar el registro
DELETE FROM Book WHERE Title = 'Pride and Prejudice';


-- Eliminar los autores que no han escrito ningún libro.
-- En este caso no se elimina ninguno porque todos han escrito algún libro
DELETE FROM Author
	WHERE Author_ID not in
		(SELECT Author_ID FROM Book_Author
			WHERE Book_Author.Author_ID = Author.Author_ID		
		);



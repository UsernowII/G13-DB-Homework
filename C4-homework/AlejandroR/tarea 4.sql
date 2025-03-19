--TAREA 4

-- PUNTO 1 a
SELECT * FROM book
WHERE publisher_id = (
SELECT publisher_id FROM publisher
WHERE name = 'Penguin Books'
);


-- b
SELECT * FROM BOOK
WHERE publication_year >1950


-- c
SELECT * FROM author
WHERE author_id IN (
		SELECT author_id FROM book_author
		WHERE book_id IN (
		SELECT book_id FROM BOOK
		WHERE genre = 'Fantasy'
)
); 

-- d

SELECT title FROM book
WHERE book_id IN (
SELECT book_id FROM book_author
WHERE author_id IN (
SELECT author_id FROM author
WHERE name LIKE '%J.K%'
)
);

-- PUNTO 2

-- Actualizar el género del libro '1984' a 'Science Fiction'.

UPDATE BOOK
SET genre = 'Science Fiction' 
WHERE title = '1984';

-- Cambiar la nacionalidad de 'Mark Twain' a 'Canadian'.
UPDATE author
SET nationality = 'canadian' 
WHERE name = 'Mark Twain';

-- PUNTO 3

-- a Eliminar el libro 'Pride and Prejudice' de la base de datos.

DELETE FROM Book_Author
WHERE Book_id = (
SELECT Book_id FROM Book
WHERE Title = 'Pride and Prejudice'
);

-- b Eliminar los autores que no han escrito ningún libro.

SELECT * FROM Book_Author

SELECT DISTINCT Author_id
FROM Book_Author

DELETE FROM Author
WHERE Author_id NOT IN (
SELECT DISTINCT Author_id
FROM Book_Author
);

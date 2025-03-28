-- Punto 2: Modificar Información con UPDATE

-- Actualizar el género del libro '1984' a 'Science Fiction'.
UPDATE Book
	SET Genre = 'Science Fiction'
	WHERE Title = '1984'

-- Cambiar la nacionalidad de 'Mark Twain' a 'Canadian'.
UPDATE Author
	SET Nationality = 'Canadian'
	WHERE Name = 'Mark Twain'


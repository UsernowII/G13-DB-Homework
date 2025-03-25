---hechopor juliangadev
--Punto 2: Modificar Información con UPDATE

--Punto 2.1 Actualizar el género del libro '1984' a 'Science Fiction'.
UPDATE Book  
SET Genre = 'Science Fiction'  
WHERE Title = '1984';

--punto 2.2 Cambiar la nacionalidad de 'Mark Twain' a 'Canadian'.
UPDATE author  
SET nationality = 'Canadian'  
WHERE name = 'Mark Twain';
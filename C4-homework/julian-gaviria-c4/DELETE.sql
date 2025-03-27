--Punto 3: Eliminar Información con DELETE

--punto 3.1 Eliminar el libro 'Pride and Prejudice' de la base de datos.
delete from book_author
where book_id = (select book_id from book 
where title ='Pride and Prejudice' );

delete from book
where title ='Pride and Prejudice';

--punto 3.1 Eliminar los autores que no han escrito ningún libro.
delete from author
where author_id not in
(select distinct author_id from book_author);
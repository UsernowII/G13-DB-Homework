--develop by juliangadev
--Punto 1: Generar Reportes con SELECT

--Reporte 1: Seleccionar todos los libros publicados por 'Penguin Books'.
select * from book
where publisher_id  = 1;

--Reporte 2: Seleccionar todos los libros publicados después del año 1950.
select * from book
where publication_year > 1950

--Reporte 3: Seleccionar los nombres de los autores que han escrito libros de género 'Fantasy' utilizando una subconsulta.

select name from author
where author_id in
(select author_id from book_author
where book_id in (select book_id from book
where genre = 'Fantasy'))
;
--Reporte 4: Seleccionar los títulos de los libros escritos por autores cuyo nombre contiene 'J.K.' utilizando una subconsulta.
select title from book
where book_id in (
select book_id from book_author
where author_id in 
(select author_id from author
where name like '%J.K%' ));

--Reporte 5: Utilizando una subconsulta, seleccionar los títulos de los libros escritos por autores británicos.
select title from book
where book_id in
(select book_id from book_author
where author_id in(
select author_id from author
where nationality = 'British'
));
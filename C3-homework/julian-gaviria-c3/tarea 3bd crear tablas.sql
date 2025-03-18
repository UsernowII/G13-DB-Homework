--tabla autores
create table author(
author_id integer primary key not null,
name varchar(100),
nationality varchar(50)
);

--tabla libros
create table book(
book_id integer primary key,
title varchar(100),
genre varchar(50),
publication_year integer
);

--tabla publicacion
create table publisher(
publisher_id integer primary key,
name varchar(100),
country varchar(50)
);

--tabla libro autor
create table book_author(
book_id integer,
author_id integer,
 FOREIGN KEY (book_id) REFERENCES book(book_id),
 FOREIGN KEY (author_id) REFERENCES author(author_id)
);


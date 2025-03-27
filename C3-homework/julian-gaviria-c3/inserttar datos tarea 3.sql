--insertar datos autores
insert into author(
author_id,name,nationality
)values
(1,'George Orwell','British'),
(2, 'Jane Austen', 'British'),
(3, 'Mark Twain', 'American');
--insertar datos libros
insert into book(book_id,title,genre,publication_year)values
(1,'1984','Dystopian',1949),
(2,'Pride and Prejudice','Romance',1813),
(3,'Adventures of Huckleberry Finn','Adventure',1884);

--insertar datos editores
insert into publisher(publisher_id,name,country)values
(1,'Penguin Books','United Kingdom'),
(2,'Oxford University Press','United Kingdom');

--insertar datos libros autores
insert into book_author(book_id,author_id)values
(1,1),
(2,2),
(3,3);

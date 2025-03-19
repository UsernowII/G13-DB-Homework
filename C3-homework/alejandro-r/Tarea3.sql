CREATE TABLE IF NOT EXISTS Author (
	Author_Id integer PRIMARY KEY,
	name varchar(100) NOT NULL,
	nationality varchar(50) NOT NULL
); 

CREATE TABLE IF NOT EXISTS Book (
	Book_Id INTEGER PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	Genre VARCHAR(50) NOT NULL,
	Publication_Year INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS Publisher(
	Publisher_Id INTEGER PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	country VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS Book_Author (
Book_ID INTEGER NOT NULL REFERENCES book(book_Id),
Author_ID INTEGER NOT NULL REFERENCES author(author_Id)
);

ALTER TABLE Book
ADD COLUMN Publisher_ID INTEGER;

ALTER TABLE book
ADD CONSTRAINT fk_publisher
FOREIGN KEY (publisher_ID) REFERENCES Publisher(Publisher_ID);

INSERT INTO Author(Author_ID, Name, Nationality) VALUES 
(1, 'George Orwell', 'British'),
(2, 'Jane Austen', 'British'),
(3, 'Mark Twain', 'American');

INSERT INTO book(book_Id, title, genre, publication_Year) VALUES
(1,	'1984',	'Dystopian	1949',	1),
(2,	'Pride and Prejudice',	'Romance',	1813),
(3,	'Adventures of Huckleberry Finn',	'Adventure',	1884);

INSERT INTO publisher(publisher_Id, name, country) VALUES 
(1,	'Penguin Books', 'United Kingdom'),
(2,	'Oxford University Press',	'United Kingdom');

INSERT INTO book_author(book_Id, Author_Id) VALUES 
(1,	2),
(2,	2),
(3,	1);

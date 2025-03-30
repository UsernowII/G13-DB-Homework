---------------------> DML <---------------------
INSERT INTO 
    Author(Author_ID, Name, Nationality)
VALUES 
    (1, 'George Orwell', 'British'),
    (2, 'Jane Austen', 'British'),
    (3, 'Mark Twain', 'American');

INSERT INTO
	Publisher(Publisher_ID, Name, Country)
VALUES
	(1, 'Penguin Books', 'United Kingdom'),
	(2, 'Oxford University Press', 'United Kingdom');

INSERT INTO 
	Book(Book_ID, Title, Genre, Publication_Year, Publisher_ID)
VALUES
	(1, '1984', 'Dystopian', 1949, 1),
	(2, 'Pride and Prejudice', 'Romance', 1813, 2),
	(3, 'Adventures of Huckleberry', 'Adventure', 1884, 1);

INSERT INTO
	Book_Author(Book_ID, Author_ID)
VALUES
	(1,1),
	(2,2),
	(3,3);

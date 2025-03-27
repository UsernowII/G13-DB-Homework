---------------------> DDL <---------------------

-- CREACION DE BASE DE DATOS LIBRERIA
CREATE DATABASE Library;

--CREACION DE TABLAS
CREATE TABLE Author (
	Author_ID INTEGER PRIMARY KEY,
    Name VARCHAR(100),
    Nationality VARCHAR(50)
);

CREATE TABLE Publisher (
    Publisher_ID INTEGER PRIMARY KEY,
    Name VARCHAR(100),
    Country VARCHAR(50)
);

CREATE TABLE Book (
    Book_Id INTEGER PRIMARY KEY,
    Title VARCHAR(100), 
    Genre VARCHAR(50),
    Publication_Year INTEGER,
	Publisher_ID INTEGER REFERENCES Publisher(Publisher_ID)
);

CREATE TABLE Book_Author (
    Book_Id INTEGER,
    Author_ID INTEGER,

    FOREIGN KEY (Book_Id) REFERENCES Book(Book_Id),
    FOREIGN KEY (Author_ID) REFERENCES Author(Author_ID)
);
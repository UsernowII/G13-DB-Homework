-- PUNTO 1
SELECT B.Title, P.Name AS Editors_the_books
FROM Book B
INNER JOIN Publisher P ON B.Publisher_ID = P.Publisher_ID;

-- PUNTO 2

SELECT A.Name, B.Title
FROM Author A
LEFT JOIN Book_Author BA ON A.Author_ID = BA.Author_ID
LEFT JOIN Book B ON BA.Book_ID = B.Book_ID;

-- PUNTO 3

SELECT B.Title, A.Name
FROM Book B
RIGHT JOIN Book_Author BA ON B.Book_ID = BA.Book_ID
RIGHT JOIN Author A ON BA.Author_ID = A.Author_ID;

-- PUNTO 4

SELECT B.Title, A.Name AS Autor, P.Name AS Editor
FROM Book B
LEFT JOIN Book_Author BA ON B.Book_ID = BA.Book_ID
LEFT JOIN Author A ON BA.Author_ID = A.Author_ID
LEFT JOIN Publisher P ON B.Publisher_ID = P.Publisher_ID;

-- PUNTO 5

SELECT B.Title, A1.Name AS Autor1, A2.Name AS Autor2
FROM Book B
INNER JOIN Book_Author BA1 ON B.Book_ID = BA1.Book_ID
INNER JOIN Author A1 ON BA1.Author_ID = A1.Author_ID
INNER JOIN Book_Author BA2 ON B.Book_ID = BA2.Book_ID
INNER JOIN Author A2 ON BA2.Author_ID = A2.Author_ID
WHERE BA1.Author_ID != BA2.Author_ID;

--PUNTO 6

SELECT P.Name AS Editor, COUNT(B.Book_ID) AS Total_Libros, 
       string_agg(DISTINCT B.Title, ',') AS Títulos
FROM Publisher P
JOIN Book B ON P.Publisher_ID = B.Publisher_ID
GROUP BY P.Name
ORDER BY Total_Libros DESC;



















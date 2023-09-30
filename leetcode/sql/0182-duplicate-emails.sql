SELECT email as Email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1;
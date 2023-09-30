-- FIRST SUBMISSION
DELETE p1
FROM Person p1
JOIN Person p2 
ON p1.email = p2.email
WHERE p1.id > p2.id;

-- SECOND SUBMISSION
DELETE FROM Person
WHERE id IN (
  SELECT id
  FROM (
    SELECT id, email, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM Person
  ) t
  WHERE rn > 1
);
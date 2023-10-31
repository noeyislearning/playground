-- 196. Delete Duplicate Emails (Answer v2)
-- Problem Link: https://leetcode.com/problems/delete-duplicate-emails/
-- Solution Link (Personal): 

DELETE FROM Person
WHERE id IN (
  SELECT id
  FROM (
    SELECT id, email, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM Person
  ) t
  WHERE rn > 1
);
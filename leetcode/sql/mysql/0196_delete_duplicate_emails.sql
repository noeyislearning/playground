-- 196. Delete Duplicate Emails 
-- Problem Link: https://leetcode.com/problems/delete-duplicate-emails/

DELETE FROM Person
WHERE id IN (
  SELECT id
  FROM (
    SELECT id, email, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM Person
  ) t
  WHERE rn > 1
);
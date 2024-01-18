-- 182. Duplicate Emails 
-- Problem Link: https://leetcode.com/problems/duplicate-emails/

SELECT email as Email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1;
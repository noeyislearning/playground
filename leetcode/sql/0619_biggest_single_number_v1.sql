-- 619. Biggest Single Number (Answer v1)
-- Problem Link: https://leetcode.com/problems/biggest-single-number/
-- Solution Link (Personal):

WITH SingleNumbers AS (
    SELECT num
    FROM MyNumbers
    GROUP BY num
    HAVING COUNT(*) = 1
)
SELECT MAX(num) AS num
FROM SingleNumbers;
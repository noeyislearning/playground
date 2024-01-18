-- 619. Biggest Single Number 
-- Problem Link: https://leetcode.com/problems/biggest-single-number/

WITH SingleNumbers AS (
    SELECT num
    FROM MyNumbers
    GROUP BY num
    HAVING COUNT(*) = 1
)
SELECT MAX(num) AS num
FROM SingleNumbers;
-- 180. Consecutive Numbers 
-- Problem Link: https://leetcode.com/problems/consecutive-numbers/
-- Solution Link (Personal):

SELECT DISTINCT num AS ConsecutiveNums
FROM (
    SELECT num,
           @count := IF(@prev = num, @count + 1, 1) AS consec_count,
           @prev := num
    FROM Logs
    CROSS JOIN (SELECT @count := 0, @prev := NULL) AS vars
    ORDER BY id
) AS counts
WHERE consec_count >= 3;

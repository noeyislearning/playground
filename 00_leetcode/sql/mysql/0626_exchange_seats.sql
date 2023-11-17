-- 626. Exchange Seats 
-- Problem Link: https://leetcode.com/problems/exchange-seats/
-- Solution Link (Personal):

SELECT
    CASE
        WHEN MOD(id, 2) = 1 AND id = (SELECT COUNT(*) FROM seat) THEN id
        WHEN MOD(id, 2) = 1 THEN id + 1
        ELSE id - 1
    END AS id,
    student
FROM seat
ORDER BY id ASC;

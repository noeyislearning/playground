-- 1321. Restaurant Growth 
-- Problem Link: https://leetcode.com/problems/restaurant-growth/
-- Solution Link (Personal):

WITH cte AS
(
    SELECT visited_on, SUM(amount) amount
    FROM Customer
    GROUP BY visited_on
),
cte1 AS
(
    SELECT visited_on, SUM(amount) OVER(ORDER BY visited_on ROWS BETWEEN 6 preceding and CURRENT ROW) amount, ROUND(AVG(amount) OVER(ORDER BY visited_on ROWS BETWEEN 6 preceding and CURRENT ROW),2) average_amount, ROW_NUMBER()OVER(ORDER BY visited_on) RN
    FROM cte
)

SELECT visited_on, amount, average_amount
FROM cte1
WHERE RN > 6
ORDER BY visited_on
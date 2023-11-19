-- 1204. Last Person to Fit in the Bus 
-- Problem Link: https://leetcode.com/problems/last-person-to-fit-in-the-bus/

SELECT person_name
FROM (
    SELECT q.*,
           SUM(weight) OVER (ORDER BY turn) AS total_weight
    FROM Queue q
) AS subquery
WHERE total_weight <= 1000
ORDER BY turn DESC
LIMIT 1;

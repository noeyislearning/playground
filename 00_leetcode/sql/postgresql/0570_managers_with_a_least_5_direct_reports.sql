-- 197. Rising Temperature
-- Problem Link: https://leetcode.com/problems/rising-temperature/
-- Solution Link (Personal):

WITH DirectReports AS (
    SELECT managerId, COUNT(*) AS num_reports
    FROM Employee
    WHERE managerId IS NOT NULL
    GROUP BY managerId
)

SELECT e.name
FROM Employee e
JOIN DirectReports d ON e.id = d.managerId
WHERE d.num_reports >= 5;
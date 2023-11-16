-- 197. Rising Temperature
-- Problem Link: https://leetcode.com/problems/rising-temperature/
-- Solution Link (Personal):

SELECT w1.id
FROM Weather w1
JOIN Weather w2 ON w1.recordDate = w2.recordDate + 1
WHERE w1.temperature > w2.temperature;

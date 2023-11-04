-- 595. Big Countries (Answer v1)
-- Problem Link: https://leetcode.com/problems/big-countries/
-- Solution Link (Personal):

SELECT name, population, area
FROM World
WHERE area >= 3000000 OR population >= 25000000;
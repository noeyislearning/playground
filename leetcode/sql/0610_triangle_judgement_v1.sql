-- 610. Triangle Judgement (Answer v1)
-- Problem Link: https://leetcode.com/problems/triangle-judgement/
-- Solution Link (Personal):

SELECT x, y, z,
    CASE 
        WHEN x + y > z AND y + z > x AND x + z > y THEN 'Yes'
        ELSE 'No'
    END AS triangle
FROM Triangle;
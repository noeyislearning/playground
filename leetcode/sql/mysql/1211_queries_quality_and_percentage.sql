-- 1211. Queries Quality and Percentage
-- Problem Link: https://leetcode.com/problems/queries-quality-and-percentage/
-- Solution Link (Personal):

SELECT 
    query_name,
    ROUND(AVG(rating / position), 2) AS quality,
    ROUND((SUM(rating < 3) / COUNT(*)) * 100, 2) AS poor_query_percentage
FROM 
    Queries
GROUP BY 
    query_name;
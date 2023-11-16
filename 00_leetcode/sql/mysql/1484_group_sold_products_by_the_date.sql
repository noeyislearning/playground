-- 1484. Group Sold Products by the Date 
-- Problem Link: https://leetcode.com/problems/group-sold-products-by-the-date/
-- Solution Link (Personal): 

SELECT 
    sell_date,
    COUNT(DISTINCT product) AS num_sold,
    GROUP_CONCAT(DISTINCT product ORDER BY product SEPARATOR ',') AS products
FROM
    Activities
GROUP BY sell_date
ORDER BY sell_date;

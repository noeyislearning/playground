-- 1070. Product Sales Analysis III
-- Problem Link: https://leetcode.com/problems/product-sales-analysis-iii/
-- Solution Link (Personal):

SELECT 
    s.product_id, 
    min_year AS first_year, 
    s.quantity, 
    s.price
FROM 
    Sales s
JOIN 
    (SELECT product_id, MIN(year) AS min_year FROM Sales GROUP BY product_id) sub
ON 
    s.product_id = sub.product_id AND s.year = sub.min_year
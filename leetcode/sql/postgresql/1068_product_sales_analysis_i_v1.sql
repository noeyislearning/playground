-- 1068. Product Sales Analysis I (Answer v1)
-- Problem Link: https://leetcode.com/problems/product-sales-analysis-i/
-- Solution Link (Personal):

SELECT 
    p.product_name, s.year, s.price
FROM Sales s
JOIN Product p ON s.product_id = p.product_id
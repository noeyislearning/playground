-- 1757. Recyclable and Low Fat Products (Answer v1)
-- Problem Link: https://leetcode.com/problems/recyclable-and-low-fat-products/
-- Solution Link (Personal):

SELECT product_id
FROM Products
WHERE low_fats = 'Y' AND recyclable = 'Y';
-- 1757. Recyclable and Low Fat Products 
-- Problem Link: https://leetcode.com/problems/recyclable-and-low-fat-products/

SELECT product_id
FROM Products
WHERE low_fats = 'Y' AND recyclable = 'Y';
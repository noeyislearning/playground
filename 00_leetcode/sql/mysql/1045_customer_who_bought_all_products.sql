-- 1045. Customers Who Bought All Products 
-- Problem Link: https://leetcode.com/problems/customers-who-bought-all-products/

SELECT c.customer_id
FROM Customer c
JOIN Product p ON c.product_key = p.product_key
GROUP BY c.customer_id
HAVING COUNT(DISTINCT c.product_key) = (SELECT COUNT(*) FROM Product);
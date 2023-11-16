-- 183. Customers Who Never Order 
-- Problem Link: https://leetcode.com/problems/customers-who-never-order/
-- Solution Link (Personal): 

SELECT c.name AS 'Customers'
FROM Customers c
LEFT JOIN Orders o ON c.id = o.customerId
WHERE o.id IS NULL;
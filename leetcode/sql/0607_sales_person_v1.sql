-- 607. Sales Person (Answer v1)
-- Problem Link: https://leetcode.com/problems/sales-person/
-- Solution Link (Personal):

SELECT s.name
FROM SalesPerson s
WHERE s.sales_id NOT IN (
  SELECT o.sales_id
  FROM Orders o
  INNER JOIN Company c ON o.com_id = c.com_id
  WHERE c.name = 'RED'
)
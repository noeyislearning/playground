-- 586. Customer Placing the Largest Number of Orders (Answer v1)
-- Problem Link: https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/
-- Solution Link (Personal):

SELECT customer_number
FROM Orders
GROUP BY customer_number
HAVING COUNT(order_number) = (
    SELECT MAX(order_count)
    FROM (
        SELECT customer_number, COUNT(order_number) AS order_count
        FROM Orders
        GROUP BY customer_number
    ) AS temp
);
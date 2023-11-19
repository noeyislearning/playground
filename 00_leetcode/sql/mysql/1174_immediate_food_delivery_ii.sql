-- 1174. Immediate Food Delivery II 
-- Problem Link: https://leetcode.com/problems/immediate-food-delivery-ii/

WITH CTE AS (
  SELECT 
    customer_id,
    MIN(order_date) AS first_order_date,
    CASE 
      WHEN MIN(order_date) = MIN(customer_pref_delivery_date) THEN 1
      ELSE 0 
    END AS is_immediate
  FROM Delivery 
  GROUP BY customer_id
)

SELECT 
  ROUND(AVG(is_immediate) * 100, 2) AS immediate_percentage
FROM CTE;
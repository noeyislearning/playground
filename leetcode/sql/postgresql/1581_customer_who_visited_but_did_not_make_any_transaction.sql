-- 1581. Customer Who Visited but Did Not Make Any Transactions 
-- Problem Link: https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/

WITH visits_without_transactions AS (
  SELECT v.customer_id, v.visit_id
  FROM Visits v
  LEFT JOIN Transactions t ON v.visit_id = t.visit_id
  WHERE t.transaction_id IS NULL
)

SELECT
  customer_id,
  COUNT(*) AS count_no_trans
FROM visits_without_transactions
GROUP BY customer_id
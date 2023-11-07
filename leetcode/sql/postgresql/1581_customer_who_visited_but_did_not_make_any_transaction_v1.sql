-- 1581. Customer Who Visited but Did Not Make Any Transactions (Answer v1)
-- Problem Link: https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/
-- Solution Link (Personal):

SELECT
    v.customer_id,
    COUNT(*) AS count_no_trans
FROM Transactions t
RIGHT JOIN Visits v
    ON v.visit_id = t.visit_id
WHERE t.transaction_id IS NULL
GROUP BY v.customer_id;
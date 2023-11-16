-- 1907. Count Salary Categories 
-- Problem Link: https://leetcode.com/problems/count-salary-categories/
-- Solution Link (Personal):

SELECT 'Low Salary' AS category, SUM(income < 20000) AS accounts_count
FROM Accounts
UNION ALL
SELECT 'Average Salary' AS category, SUM(income BETWEEN 20000 AND 50000) AS accounts_count
FROM Accounts
UNION ALL
SELECT 'High Salary' AS category, SUM(income > 50000) AS accounts_count
FROM Accounts;


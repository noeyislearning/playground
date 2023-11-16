-- 176. Second Highest Salary 
-- Problem Link: https://leetcode.com/problems/second-highest-salary/
-- Solution Link (Personal): 

SELECT 
    IFNULL(
        (SELECT DISTINCT salary 
         FROM Employee 
         ORDER BY salary DESC 
         LIMIT 1 OFFSET 1),
        NULL
    ) AS SecondHighestSalary

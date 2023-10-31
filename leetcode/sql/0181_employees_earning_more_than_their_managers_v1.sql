-- 181. Employees Earning More Than Their Managers (Answer v1)
-- Problem Link: https://leetcode.com/problems/employees-earning-more-than-their-managers/
-- Solution Link (Personal): 

SELECT e1.name AS Employee
FROM Employee e1
JOIN Employee e2 ON e1.managerId = e2.id
WHERE e1.salary > e2.salary;
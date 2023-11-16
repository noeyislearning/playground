-- 577. Employee Bonus 
-- Problem Link: https://leetcode.com/problems/employee-bonus/
-- Solution Link (Personal):

SELECT E.name, B.bonus
FROM Employee E
LEFT JOIN Bonus B ON E.empId = B.empId
WHERE B.bonus < 1000 OR B.bonus IS NULL;
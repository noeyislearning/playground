-- 1978. Employees Whose Manager Left the Company
-- Problem Link: https://leetcode.com/problems/employees-whose-manager-left-the-company/
-- Solution Link (Personal):

SELECT e.employee_id 
FROM Employees e 
WHERE e.salary < 30000 AND e.manager_id NOT IN (
    SELECT m.employee_id 
    FROM Employees m)
GROUP BY e.employee_id 
ORDER BY e.employee_id

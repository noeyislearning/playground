-- 1978. Employees Whose Manager Left the Company
-- Problem Link: https://leetcode.com/problems/employees-whose-manager-left-the-company/
-- Solution Link (Personal):

SELECT e1.employee_id
FROM Employees e1
LEFT JOIN Employees e2 ON e1.manager_id = e2.employee_id
WHERE e1.salary < 30000 AND e2.employee_id IS NULL
ORDER BY e1.employee_id;

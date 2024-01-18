-- 1731. The Number of Employees Which Report to Each Employee
-- Problem Link: https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/

SELECT m.employee_id, m.name, COUNT(r.employee_id) AS reports_count, ROUND(AVG(r.age)) AS average_age  
FROM Employees m
LEFT JOIN Employees r ON m.employee_id = r.reports_to
WHERE r.employee_id IS NOT NULL
GROUP BY m.employee_id
ORDER BY m.employee_id;
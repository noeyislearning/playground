-- 185. Department Top Three Salaries 
-- Problem Link: https://leetcode.com/problems/department-top-three-salaries/

SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
FROM (
    SELECT *,
           DENSE_RANK() OVER (PARTITION BY departmentId ORDER BY salary DESC) AS salary_rank
    FROM Employee
) e
JOIN Department d ON e.departmentId = d.id
WHERE e.salary_rank <= 3
ORDER BY d.name, e.salary DESC;

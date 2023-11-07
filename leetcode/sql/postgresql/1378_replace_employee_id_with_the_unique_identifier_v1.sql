-- 1378. Replace Employee ID With The Unique Identifier (Answer v1)
-- Problem Link: https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/
-- Solution Link (Personal):

SELECT
    u.unique_id,
    e.name
FROM Employees e
LEFT JOIN EmployeeUNI u
    ON e.id = u.id
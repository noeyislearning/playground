-- 596. Classes More Than 5 Students
-- Problem Link: https://leetcode.com/problems/classes-more-than-5-students/
-- Solution Link (Personal):

SELECT class 
FROM Courses
GROUP BY class
HAVING COUNT(DISTINCT student) >= 5
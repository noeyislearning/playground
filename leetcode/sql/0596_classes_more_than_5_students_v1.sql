-- 596. Classes More Than 5 Students (Answer v1)
-- Problem Link: https://leetcode.com/problems/classes-more-than-5-students/
-- Solution Link (Personal):

SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(student) >= 5;
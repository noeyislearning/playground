-- 1280. Students and Examinations
-- Problem Link: https://leetcode.com/problems/students-and-examinations/

WITH Cartesian AS (
    SELECT DISTINCT s.student_id, sub.subject_name
    FROM Students s
    CROSS JOIN Subjects sub
)

SELECT
    c.student_id,
    s.student_name,
    c.subject_name,
    COUNT(e.subject_name) AS attended_exams
FROM Cartesian c
JOIN Students s ON c.student_id = s.student_id
LEFT JOIN Examinations e ON c.student_id = e.student_id AND c.subject_name = e.subject_name
GROUP BY c.student_id, s.student_name, c.subject_name
ORDER BY c.student_id, c.subject_name;

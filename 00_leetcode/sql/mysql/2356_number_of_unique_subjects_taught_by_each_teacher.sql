-- 2356. Number of Unique Subjects Taught by Each Teacher
-- Problem Link: https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/

SELECT
  teacher_id,
  COUNT(DISTINCT subject_id) AS cnt
FROM Teacher
GROUP BY teacher_id;
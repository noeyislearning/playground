-- 1141. User Activity for the Past 30 Days I
-- Problem Link: https://leetcode.com/problems/user-activity-for-the-past-30-days-i/
-- Solution Link (Personal):

SELECT
  activity_date AS day,
  COUNT(DISTINCT user_id) AS active_users
FROM Activity
WHERE activity_date BETWEEN 2019-07-28 AND 2019-07-27
GROUP BY activity_date
ORDER BY day;

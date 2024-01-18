-- 1633. Percentage of Users Attended a Contest
-- Problem Link: https://leetcode.com/problems/percentage-of-users-attended-a-contest/

SELECT r.contest_id, ROUND((COUNT(DISTINCT r.user_id) / (SELECT COUNT(*) FROM Users)) * 100, 2) AS percentage
FROM Register r
GROUP BY r.contest_id
ORDER BY percentage DESC, r.contest_id ASC;
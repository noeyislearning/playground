-- 511. Game Play Analysis I (Answer 1)
-- Problem Link: https://leetcode.com/problems/game-play-analysis-i/
-- Solution Link (Personal):

SELECT player_id, MIN(event_date) AS first_login
FROM Activity
GROUP BY player_id;
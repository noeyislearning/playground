-- 550. Game Play Analysis IV
-- Problem Link: https://leetcode.com/problems/game-play-analysis-iv/
-- Solution Link (Personal):

WITH first_login AS (
  SELECT 
    player_id,
    MIN(event_date) AS first_login_date
  FROM Activity
  GROUP BY player_id
),
consecutive_logins AS (
  SELECT 
    f.player_id
  FROM first_login f 
  JOIN Activity a 
    ON f.player_id = a.player_id 
   AND DATE(f.first_login_date + INTERVAL 1 DAY) = a.event_date
  GROUP BY f.player_id  
)

SELECT 
  ROUND(COUNT(*) / (SELECT COUNT(DISTINCT player_id) FROM Activity), 2) AS fraction
FROM consecutive_logins;
-- 602. Friend Requests II: Who Has the Most Friends 
-- Problem Link: https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/
-- Solution Link (Personal):

SELECT id, COUNT(*) AS num 
FROM (
    SELECT requester_id AS id FROM RequestAccepted
    UNION ALL
    SELECT accepter_id FROM RequestAccepted
) AS friends_count
GROUP BY id
ORDER BY num DESC 
LIMIT 1;

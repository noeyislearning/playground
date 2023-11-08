-- 1683. Invalid Tweets 
-- Problem Link: https://leetcode.com/problems/invalid-tweets/
-- Solution Link (Personal):

SELECT tweet_id
FROM Tweets
WHERE LENGTH(content) > 15;
-- 584. Find Customer Referee (Answer v1)
-- Problem Link: https://leetcode.com/problems/find-customer-referee/
-- Solution Link (Personal):

SELECT name
FROM Customer 
WHERE referee_id NOT IN (2) OR referee_id IS NULL
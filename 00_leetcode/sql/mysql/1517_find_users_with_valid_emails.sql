-- 1517. Find Users With Valid Emails 
-- Problem Link: https://leetcode.com/problems/find-users-with-valid-emails/
-- Solution Link (Personal): 

SELECT user_id, name, mail
FROM Users
WHERE 
    mail REGEXP '^[a-zA-Z][a-zA-Z0-9_.-]*@leetcode\\.com$'
    AND mail NOT REGEXP '#'
    AND mail NOT LIKE '.%'

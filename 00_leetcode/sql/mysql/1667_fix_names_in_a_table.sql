-- 1667. Fix names in a table
-- Problem Link: https://leetcode.com/problems/fix-names-in-a-table/
-- Solution Link (Personal):

SELECT user_id, 
    CONCAT(UCASE(SUBSTRING(name, 1, 1)), LCASE(SUBSTRING(name, 2))) AS name
FROM Users
ORDER BY user_id;

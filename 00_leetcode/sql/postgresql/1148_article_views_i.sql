-- 1148. Article Views I
-- Problem Link: https://leetcode.com/problems/article-views-i/
-- Solution Link (Personal):

SELECT DISTINCT author_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY author_id;
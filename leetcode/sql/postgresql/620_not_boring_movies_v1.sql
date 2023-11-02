-- 620. Not Boring Movies
-- Problem Link: https://leetcode.com/problems/not-boring-movies/
-- Solution Link (Personal):

SELECT id, movie, description, rating
FROM cinema
WHERE id % 2 = 1
AND description <> 'boring'
ORDER BY rating DESC;

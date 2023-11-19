-- 1341. Movie Rating 
-- Problem Link: https://leetcode.com/problems/movie-rating/

(
  SELECT name AS results
  FROM Users
  JOIN MovieRating ON Users.user_id = MovieRating.user_id
  GROUP BY Users.user_id, Users.name
  ORDER BY COUNT(*) DESC, name ASC
  LIMIT 1
)
  UNION ALL
(
  SELECT title AS results
  FROM Movies
  JOIN MovieRating ON Movies.movie_id = MovieRating.movie_id
  WHERE MONTH(created_at) = 2 AND YEAR(created_at) = 2020
  GROUP BY Movies.movie_id, Movies.title
  ORDER BY AVG(rating) DESC, title ASC
  LIMIT 1
);
    

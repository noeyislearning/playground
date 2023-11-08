-- 1661. Average Time of Process per Machine
-- Problem Link: https://leetcode.com/problems/average-time-of-process-per-machine/
-- Solution Link (Personal):

WITH ProcessingTimes AS (
  SELECT machine_id, process_id,
         SUM(CASE WHEN activity_type = 'end' THEN timestamp ELSE -timestamp END) AS processing_time
  FROM Activity
  GROUP BY machine_id, process_id
)

SELECT machine_id, ROUND(AVG(processing_time)::numeric, 3) as processing_time
FROM ProcessingTimes
GROUP BY machine_id;


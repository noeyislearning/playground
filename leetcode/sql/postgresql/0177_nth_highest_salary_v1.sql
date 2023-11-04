-- 177. Nth Highest Salary (Answer v1)
-- Problem Link: https://leetcode.com/problems/nth-highest-salary/
-- Solution Link (Personal):

CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS INT AS $$
DECLARE
  salary_value INT;
BEGIN
  SELECT DISTINCT Salary INTO salary_value
  FROM Employee
  ORDER BY Salary DESC
  LIMIT 1 OFFSET N - 1;

  RETURN salary_value;
END;
$$ LANGUAGE plpgsql;

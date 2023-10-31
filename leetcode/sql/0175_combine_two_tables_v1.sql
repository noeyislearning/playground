-- 0175. Combine Two Tables (Answer v1)
-- Problem Link: https://leetcode.com/problems/combine-two-tables/
-- Solution Link (Personal): 

SELECT
    P.firstName,
    P.lastName,
    A.city,
    A.state
FROM Person P
LEFT JOIN Address A ON P.personId = A.personId;
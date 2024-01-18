-- 1164. Product Price at a Given Date 
-- Problem Link: https://leetcode.com/problems/product-price-at-a-given-date/

SELECT p1.product_id, COALESCE(p2.new_price, 10) AS price
FROM (
    SELECT DISTINCT product_id
    FROM Products
) p1
LEFT JOIN (
    SELECT product_id, new_price
    FROM (
        SELECT *,
               ROW_NUMBER() OVER(PARTITION BY product_id ORDER BY change_date DESC) AS rn
        FROM Products
        WHERE change_date <= '2019-08-16'
    ) AS subquery
    WHERE rn = 1
) p2 ON p1.product_id = p2.product_id
GROUP BY p1.product_id;

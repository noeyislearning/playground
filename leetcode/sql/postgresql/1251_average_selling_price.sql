-- 1251. Average Selling Price
-- Problem Link: https://leetcode.com/problems/average-selling-price/
-- Solution Link (Personal):

WITH ProductPrice AS (
    SELECT
        p.product_id,
        u.purchase_date,
        u.units,
        p.price
    FROM Prices p
    JOIN UnitsSold u ON p.product_id = u.product_id
        AND u.purchase_date >= p.start_date
        AND u.purchase_date <= p.end_date
)
SELECT
    product_id,
    ROUND(SUM(units * price) * 1.0 / SUM(units), 2) AS average_price
FROM ProductPrice
GROUP BY product_id;

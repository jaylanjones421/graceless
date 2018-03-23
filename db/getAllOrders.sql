SELECT *
FROM orders INNER JOIN graceless_inventory ON orders."productID" =graceless_inventory."id"

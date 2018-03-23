SELECT *
FROM orders JOIN graceless_inventory ON orders."productID" =graceless_inventory."id"
WHERE orders."orderID" LIKE $1
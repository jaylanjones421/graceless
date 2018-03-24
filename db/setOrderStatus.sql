UPDATE orders
SET status='Sent'
WHERE "orderID"=$1

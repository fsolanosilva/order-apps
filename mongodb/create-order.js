conn = new Mongo();
db = conn.getDB("fortegroup");
db.orders.insert({"ID":"170101000001", "date":"2017.01.01", "customer": "renato matos", "total":19500.00, "currency":"U$", "items": [{"sku":"01004", "qty":10, "price": 1400}, {"sku":"01003", "qty":5, "price": 4500}]});

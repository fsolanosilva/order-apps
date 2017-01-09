conn = new Mongo();
db = conn.getDB("fortegroup");
db.products.insert({"sku":"01001", "name":"keyboard", "unit":"pc", "price":30.00, "currency":"U$", "balance":100});
db.products.insert({"sku":"01002", "name":"monitor", "unit":"pc", "price":120.00, "currency":"U$", "balance":50});
db.products.insert({"sku":"01003", "name":"samsung galaxy s7", "unit":"pc", "price":900.00, "currency":"U$", "balance":5});
db.products.insert({"sku":"01004", "name":"iphone 7", "unit":"pc", "price":1400.00, "currency":"U$", "balance":25});
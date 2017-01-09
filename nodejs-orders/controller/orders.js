'use strict';

var debug = require("debug")("fortegroup:controller:orders");
var mongo = require("../db/mongo");

function ordersController(mongoURL){
    var self = this;
    // database connection
    self.db = null;
    mongo.connect(mongoURL).then(
        function(db){
            self.db = db;
        }
    );
};

ordersController.prototype.getByID = function(request, response, next){
    var order = request.params.order;
    // validate order parameter
    if ((order === "") || (order === "")){
        response.status(404);
        response.send("Order parameter not found!");
        return;
    }
    // looking for the order number on mongo db
    mongo.findOne(this.db, "orders", { "ID" : order })
        .then(function(item){
            response.status(201);
            response.json(item);
        })
        .catch(function(err){
            debug("Error => ", err);
            next(err);
        });
};

module.exports = function(mongoURL){
    return new ordersController(mongoURL);
};
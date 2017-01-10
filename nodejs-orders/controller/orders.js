'use strict';

var debug = require("debug")("fortegroup:controller:orders");
var mongo = require("../db/mongo");
var ntw = require("../util/network");
var jwtkey = require("../config/config").jwt().secret;


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
    var self = this;
    ntw.validateToken(request, jwtkey)
        .catch(function(error){
            response.status(403).send(error);
        })
        .then(function(result){
            var order = request.params.order;
            // validate order parameter
            if ((order === "") || (order === "")){
                response.status(404);
                response.send("Order parameter not found!");
                return;
            }
            // looking for the order number on mongo db
            mongo.findOne(self.db, "orders", { "ID" : order })
                .then(function(item){
                    response.status(201);
                    response.json(item);
                })
                .catch(function(err){
                    debug("Error => ", err);
                    next(err);
                });
        });
};

module.exports = function(mongoURL){
    return new ordersController(mongoURL);
};
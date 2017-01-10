'use strict';

var debug = require("debug")("fortegroup:controller:products");
var mongo = require("../db/mongo");
var ntw = require("../util/network");
var jwtkey = require("../config/config").jwt().secret;

function productsController(mongoURL){
    var self = this;
    // database connection
    self.db = null;
    mongo.connect(mongoURL).then(
        function(db){
            self.db = db;
        }
    );
};

productsController.prototype.getBySKU = function(request, response, next){
    var self = this;
    ntw.validateToken(request, jwtkey)
        .catch(function(error){
            response.status(403).send(error);
        })
        .then(function(result){
            var sku = request.params.sku;
            // validate order parameter
            if ((sku === "") || (sku === "")){
                response.status(404);
                response.send("sku parameter not found!");
                return;
            }
            // looking for the order number on mongo db
            mongo.findOne(self.db, "products", { "sku" : sku })
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

productsController.prototype.getByName = function(request, response, next){
    var self = this;
    ntw.validateToken(request, jwtkey)
        .catch(function(error){
            response.status(403).send(error);
        })
        .then(function(result){
            var name = request.params.name;
            // validate order parameter
            if ((name === "") || (name === "")){
                response.status(404);
                response.send("name parameter not found!");
                return;
            }
            debug("finding by name => ", name);
            // looking for the order number on mongo db
            mongo.find(self.db, "products", { "name" : { $regex : name } })
                .then(function(result){
                    response.status(201);
                    response.json(result);
                })
                .catch(function(err){
                    debug("Error => ", err);
                    next(err);
                });
        });
};

module.exports = function(mongoURL){
    return new productsController(mongoURL);
};
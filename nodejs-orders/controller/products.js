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
    ntw.validateToken(request, jwtkey)
        .catch(function(error){
            response.status(403).send(error);
        })
        .then(function(){
            var sku = request.params.sku;
            // validate order parameter
            if ((sku === "") || (sku === "")){
                response.status(404);
                response.send("sku parameter not found!");
                return;
            }
            // looking for the order number on mongo db
            mongo.findOne(this.db, "products", { "sku" : sku })
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
    return new productsController(mongoURL);
};
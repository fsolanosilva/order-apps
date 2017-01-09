'use strict';

var time = require("../util/time");
var pkg = require("../package.json");
var config = require("../config/config");

function checkController(){}

checkController.prototype.time = function(request, response, next){
    response.json({
        "now": time.now(),
        "utc": time.utc()
    });
};

checkController.prototype.ping = function(request, response, next){
    response.send("PONG");
}

checkController.prototype.version = function(request, response, next){
    response.json({
        "application-name": pkg.name,
        "application-version": pkg.version,
        "application-description": pkg.description
    });
};

module.exports = function(){
    return new checkController();
};
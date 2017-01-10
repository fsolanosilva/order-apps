'use strict';

var env = process.env['APP_ENV'].toString();

function config(){}

config.prototype.mongo = function(){
    if (env === "DEV") {
        return require("./mongo/dev.json");
    }
    return null;
}

config.prototype.redis = function(){
    if (env === "DEV") {
        return require("./redis/dev.json");
    }
    return null;
};

config.prototype.jwt = function(){
    if (env === "DEV") {
        return require("./jwt/dev.json");
    }
    return null;
};

module.exports = new config();
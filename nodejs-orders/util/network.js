'use strict';

function networkUtil(){}

networkUtil.prototype.ip = function(request){
    if (request.headers['x-forwarded-for']) {
        return request.headers['x-forwarded-for'].split(",")[0];
    } else if (request.connection && request.connection.remoteAddress) {
        return request.connection.remoteAddress;
    } else {
        return request.ip;
    }
    return "";
};

networkUtil.prototype.get = function(url, header){
    var requestify = require('requestify');
    return requestify.request(url, {
        method: 'GET',
        headers: header,
        dataType: 'json'
    });
};

networkUtil.prototype.post = function(url, header, data){
    var requestify = require('requestify');
    return requestify.request(url, {
        method: 'POST',
        body: data,
        headers: header,
        dataType: 'json'
    });
};

module.exports = new networkUtil();
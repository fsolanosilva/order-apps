'use strict';

var express = require("express");
var router = express.Router();

// mapp routes
router.use('/api/products', require('./products'));
router.use('/api/orders', require('./orders'));
router.use('/check', require('./check'));

module.exports = router;
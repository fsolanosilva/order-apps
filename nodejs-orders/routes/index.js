'use strict';

var express = require("express");
var router = express.Router();

// mapp routes
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));
router.use('/check', require('./check'));

module.exports = router;
'use strict';

var express = require("express");
var router = express.Router();
var config = require('../config/config').mongo();
var controller = require('../controller/products')(config.url);

router.get('/:sku', controller.getBySKU.bind(controller));

module.exports = router;
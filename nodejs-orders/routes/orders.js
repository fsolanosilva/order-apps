'use strict';

var express = require("express");
var router = express.Router();
var config = require('../config/config.js').mongo();
var controller = require('../controller/orders')(config.url);

router.get('/:order', controller.getByID.bind(controller));
router.post('/create', controller.create.bind(controller));

module.exports = router;
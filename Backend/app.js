var http = require('http');
var express = require('express');
var router = require("./api/routes");
var APP = express();

APP.use(express.json())
router.set(APP);

var PORT = process.env.PORT || 4000;
APP.listen(PORT, () => console.log(`Server running on port ${PORT}`));
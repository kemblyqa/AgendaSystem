var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var router = require("./api/routes");

var APP = express();

APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(cors());

router.set(APP);


APP.listen(process.env.PORT || 4000, () => console.log(`Server running`));
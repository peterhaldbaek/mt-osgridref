'use strict';

var latlon = require('mt-latlon');
var osgb36 = require('./mt-osgb36')(latlon);

module.exports = osgb36;
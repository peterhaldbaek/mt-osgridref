mt-osgridref
============

Ordnance Survey Grid Reference functions.


Installation
------------

```sh
$ npm install mt-osgridref
```


Usage
-----

The module contains methods for parsing and converting between Ordnance Survey grid reference easting/northing coordinates and (OSGB36) latitude/longitude coordinates. It is also a basic representation of an easting/northing coordinate.

```js
var OsGridRef = require('mt-osgridref');
var point = new OsGridRef(651409, 313177);
var latlon = OsGridRef.osGridToLatLong(point);
```


### OsGridRef(easting, northing)

Creates a OsGridRef object.

- __easting__ (number) Easting in metres from OS false origin
- __northing__ (number) Northing in metres from OS false origin

```js
var point = new OsGridRef(651409, 313177);
```


### OsGridRef.latLongToOsGrid(point)

Convert (OSGB36) latitude/longitude to Ordnance Survey grid reference easting/northing coordinate.

- __point__ (LatLon) OSGB36 latitude/longitude

```js
var LatLon = require('mt-latlon');

var latlon = new LatLon(51.5136, -0.0983);
var point = OsGridRef.latLongToOsGrid(latlon);
```


### OsGridRef.osGridToLatLong(gridref)

Convert Ordnance Survey grid reference easting/northing coordinate to (OSGB36) latitude/longitude.

- __gridref__ (OsGridRef) easting/northing to be converted to latitude/longitude

```js
var gridref = OsGridRef.parse('SU387148');
var latlon = OsGridRef.osGridToLatLong(gridref);
```


### OsGridRef.parse(gridref)

Converts standard grid reference ('SU387148') to fully numeric reference ([438700,114800]). Returned coordinates are in metres, centred on supplied grid square.

- __gridref__ (string) Standard format OS grid reference

```js
var gridref = OsGridRef.parse('SU387148');
var latlon = OsGridRef.osGridToLatLong(gridref);
```




Copyright and license
---------------------

The original code was written by Chris Veness and can be found at
http://www.movable-type.co.uk/scripts/latlong-gridref.html. It is released under the
simple Creative Commons attribution license
(http://creativecommons.org/licenses/by/3.0/).

This project is released under the MIT license.
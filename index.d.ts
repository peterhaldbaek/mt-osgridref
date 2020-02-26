   import LatLon from 'mt-latlon';
   export default class OsGridRef {
      private easting: number;
      private northing: number;

      /**
       * Creates a OsGridRef object
       *
       * @constructor
       * @param {Number} easting:  Easting in metres from OS false origin
       * @param {Number} northing: Northing in metres from OS false origin
       */

      constructor(easting: number, northing: number);

      /**
       * Converts this numeric grid reference to standard OS grid reference
       *
       * @param {Number} [digits=6] Precision of returned grid reference (6 digits = metres)
       * @return {String)           This grid reference in standard format
       */
      toString: (digits?: number) => string;

      /**
       * Convert (OSGB36) latitude/longitude to Ordnance Survey grid reference easting/northing coordinate
       *
       * @param {LatLon} point: OSGB36 latitude/longitude
       * @return {OsGridRef} OS Grid Reference easting/northing
       */
      static latLongToOsGrid: (point: LatLon) => OsGridRef;

      /**
       * Convert Ordnance Survey grid reference easting/northing coordinate to (OSGB36) latitude/longitude
       *
       * @param {OsGridRef} easting/northing to be converted to latitude/longitude
       * @return {LatLon} latitude/longitude (in OSGB36) of supplied grid reference
       */
      static osGridToLatLong: (gridref: OsGridRef) => LatLon;

      /**
       * Converts standard grid reference ('SU387148') to fully numeric ref ([438700,114800]);
       *   returned co-ordinates are in metres, centred on supplied grid square;
       *
       * @param {String} gridref: Standard format OS grid reference
       * @returns {OsGridRef}     Numeric version of grid reference in metres from false origin
       */
      static parse: (gridRef: string) => OsGridRef;
   }

'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

/*This name must be equal to an operationID in the openapi.yaml file */
module.exports.indexTrackerQueryGetAllTrackersGET = function indexTrackerQueryGetAllTrackersGET (req, res, next) {

  Default.indexTrackerQueryGetAllTrackersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    }, error => {
      console.log('ERROR: ' + JSON.stringify(error));
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

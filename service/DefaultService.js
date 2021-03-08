'use strict';


/**
 * Get a List of all trackers
 *
 * returns List
 **/

var mongoUtil = require( '../utils/mongoUtils' );

exports.indexTrackerQueryGetAllTrackersGET = function() {
  return new Promise(async function(resolve, reject) {
    var results = [];
    var db = mongoUtil.getDb();
    var trackers = db.collection('IndexTracker').find({});

    await trackers.forEach(tr => {
      console.log("Trackers: " + JSON.stringify(tr));
      results.push(tr);
    });
 
    if (results.length > 0) {
      resolve(results);
    } else {
      resolve();
    }
  });
}

exports.indexTrackerQueryGetChartDataGET = function(id) {
  return new Promise(async function(resolve, reject) {
    var results = [];
    var db = mongoUtil.getDb();
    var trackers = db.collection('TrackerChartData').find({trackerId: id});

    await trackers.forEach(tr => {
      console.log("Trackers: " + JSON.stringify(tr));
      results.push(tr);
    });
 
    if (results.length > 0) {
      resolve(results);
    } else {
      resolve();
    }
  });
}





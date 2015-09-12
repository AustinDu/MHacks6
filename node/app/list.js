const AWS_ACCESS_KEY_ID = 'AKIAIZCV7FRA7RDC57HQ';
const AWS_SECRET_ACCESS_KEY = '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';
const AWS_REGION = 'us-east-1';

var _ = require('lodash');
var aws = require('aws-sdk');
var myFirebaseRef = require('./firebase.js');
var metricTonnesIndexNames = require('./IndexNames/metricTonnes.js');
//var percentChangeIndexNames = require('./IndexNames/percentChange.js');
//var dollarIndexNames = require('./IndexNames/dollars.js');

aws.config.update({
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
});
var db = new aws.DynamoDB.DocumentClient();

var metricTonnesRef = myFirebaseRef.child("tonnes");
//var percentChangeRef = myFirebaseRef.child("percent");
//var dollarsRef = myFirebaseRef.child("dollars");

_.forEach(metricTonnesIndexNames, function(obj) {
	db.query(obj, function(err, data) {
	    if (err)
			console.log(err, err.stack);
	    else {
			console.log(data);
			metricTonnesRef.set(data);
	    }
	});
});

// _.forEach(percentChangeIndexNames.params, function(obj) {
// 	db.query(obj, function(err, data) {
// 	    if (err)
// 			console.log(err, err.stack);
// 	    else {
// 			console.log(data);
// 			percentChangeRef.set(data);
// 	    }
// 	});
// });

// _.forEach(dollarIndexNames.params, function(obj) {
// 	db.query(obj, function(err, data) {
// 	    if (err)
// 			console.log(err, err.stack);
// 	    else {
// 			console.log(data);
// 			dollarsRef.set(data);
// 	    }
// 	});
// });
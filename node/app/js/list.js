const AWS_ACCESS_KEY_ID = 'AKIAIZCV7FRA7RDC57HQ';
const AWS_SECRET_ACCESS_KEY = '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';
const AWS_REGION = 'us-east-1';

var superagent = require('superagent');
var http = require('http');
var aws = require('aws-sdk');
var myFirebaseRef = require('./firebase.js');

var usersRef = myFirebaseRef.child("test2");

aws.config.update({
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
});
var db = new aws.DynamoDB.DocumentClient();

var params = {
    TableName: '2012',
    KeyConditionExpression: '#t = :ticker and #d between :date1 and :date2',
    ExpressionAttributeNames: {
	'#t': 'Ticker',
	'#d': 'Date'
    },
    ExpressionAttributeValues: {
	':ticker': 'BNCCINDX Index',
	':date1': '2000-01-01',
	':date2': '2015-06-30'
    }
};

db.query(params, function(err, data) {
    if (err)
		console.log(err, err.stack);
    else {
		console.log(data);
		usersRef.set(data);
    }
});
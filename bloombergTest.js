const AWS_ACCESS_KEY_ID = 'AKIAI2PUTSTSX4W2CNAQ';
const AWS_SECRET_ACCESS_KEY = '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';
const AWS_REGION = 'us-east-1';

var aws = require('aws-sdk');
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
	':ticker': 'UKRPI Index',
	':date1': '2012-01-01',
	':date2': '2012-06-30'
    }
};

db.query(params, function(err, data) {
    if (err)
	console.log(err, err.stack);
    else
	console.log(data);
});

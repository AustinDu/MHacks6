const YEAR = '2012';
const START = YEAR + '-01-01';
const END = YEAR + '-12-31';

var _ = require('lodash');

var percentChangeIndices = [];
var params = [];

_.forEach(percentChangeIndices, function(name) {
	params.push({
		TableName: YEAR,
	    KeyConditionExpression: '#t = :ticker and #d between :date1 and :date2',
	    ExpressionAttributeNames: {
			'#t': 'Ticker',
			'#d': 'Date'
	    },
	    ExpressionAttributeValues: {
			':ticker': name,
			':date1': START,
			':date2': END
    	}
	});
});

module.exports = percentChangeIndices;
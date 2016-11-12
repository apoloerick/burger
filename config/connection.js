/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'cpidct5qtxi8sfkh',
	password: 'x68rvttcmzgg1ovr',
	database: 'al5izr8ypgniv3n3'
});


connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

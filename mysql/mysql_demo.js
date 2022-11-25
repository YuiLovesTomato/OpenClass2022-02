var  mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	port: 3308,
	user: "root",
	password: "hallym"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});

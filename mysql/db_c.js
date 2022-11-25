var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	port: 3308,
	user: "root",
	password: "hallym"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("connected!");
	con.query("CREATE DATABASE mydb", function (err, result) {
		if (err) throw err;
		console.log("Database created");
	});
});

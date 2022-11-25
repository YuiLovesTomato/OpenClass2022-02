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
	var sql = "use mydb";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("database <mydb> selected");
	});
	var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table created");
	});
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true}));

const MongoClient = require('mongodb').MongoClient

var db;
MongoClient.connect('mongodb+srv://rlawodyd129:k4580123@cluster0.dfwepbu.mongodb.net/?retryWrites=true&w=majority', function(err, client) {
	if (err) return console.log(err)
	db = client.db('member');
	//	db.collection('login').insertOne({email: 'test@google.com', password: "1234"}, function (err, result) {
		//console.log("save complete...");
	//});
	app.listen(8080, function() {
		console.log('listening on 8080')
	})
})

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/index.html');
})

app.get('/write', function(req,res) {
	res.sendFile(__dirname + '/write.html');
})

app.get('/list', function(req, res) {
	db.collection('login').find().toArray(function(err,result){
		console.log(result)
		res.render('list.ejs', {loginfo : result});
	})
})

app.post('/add', function(req, res) {
	db.collection('config').findOne({name : 'totalcount'}, function(err, result){
		var mycount = result.count;
		db.collection('login').insertOne({ _id : (mycount+1), email:req.body.email, password: req.body.password}, function(err, result) {
			console.log("save complete...");
			res.send("send complete...");
	})
});

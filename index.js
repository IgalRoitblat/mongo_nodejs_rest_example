var express = require('express')
var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient;
var bodyParser = require('body-parser').json();

var connection = MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
var app = express();

app.use(bodyParser);

app.get('/companies', (req, res) => {
	db.collection('hightech').find().toArray()
	.then(companies => {
		console.log(companies);
		res.send(JSON.stringify(companies))
	})
})

app.get('/companies/:id', (req, res) => {
	var oId = new mongodb.ObjectID(req.params.id);
	db.collection('hightech').find({"_id": oId}).toArray()
	.then(companies => {
		console.log(companies);
		res.send(JSON.stringify(companies))
	})
})

app.post('/companies/', (req, res) => {
	db.collection('hightech').insert({name: req.body.name, empl: req.body.empl, salary: req.body.salary})
	.then(results => {
		console.log(results);
		res.send(JSON.stringify(results))
	})
})

app.delete('/companies/:id', (req, res) => {
	var oId = new mongodb.ObjectID(req.params.id);
	db.collection('hightech').deleteOne({"_id": oId})
	.then(results => {
		console.log(results);
		res.send(JSON.stringify(results))
	})
})

app.put('/companies/:id', (req, res) => {
	var oId = new mongodb.ObjectID(req.params.id);
	db.collection('hightech').update({"_id": oId}, {'$set': {name: req.body.name, empl: req.body.empl, salary: req.body.salary}})
	.then(results => {
		console.log(results);
		res.send(JSON.stringify(results))
	})
})

app.listen('3000', () => {
	connection.then(companiesDB => {
		db = companiesDB.db('companies')	
		db.collection('hightech').find().toArray()
		.then(companies => {
			console.log(companies);
		})
		
	})
	console.log('listen')
})
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const request = require('request');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Application Variables

const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// Initiate
app.listen(8000, () => {
	console.log("App started, Listening Port 8000")
});


// Backend
app.get('/', (req, res) => {
		res.send("home");
});

app.get('/quotes', (req, res) => {

	const url = 'https://quote-garden.herokuapp.com/quotes/random';
	request(url, (err, response, body) => {
        if (err) {
            res.send({
                weather: null,
                error: 'Error, please try again'
            });
        } else {
        	let data = JSON.parse(body);
            res.status(200).send(data);
            
        }
    });
});

/*app.get('/quotes/search/:keyword', (req, res) => {
	const keyword = req.params.keyword;
	console.log(req.params.keyword)
	if (keyword != "") {
		const url = `https://quote-garden.herokuapp.com/quotes/search/${keyword}`;
		request(url,  (err, response, body) => {
	        if (err) {
	            res.send({
	                weather: null,
	                error: 'Error, please try again'
	            });
	        } else {
	            let data = JSON.parse(body);
            	if ((data.count > 0) || (data.count !== 5138)) {
            		res.send(data);
            	} else {
            		res.send("No data found");
            	}
	        }
	    });
	}
});*/

app.post('/quotes/keyword/search', (req, res) => {
	const keyword = req.body.keyword;
	console.log(req.body.keyword)
	if (keyword != "") {
		const url = `https://quote-garden.herokuapp.com/quotes/search/${keyword}`;
		request(url,  (err, response, body) => {
	        if (err) {
	            res.send({
	                weather: null,
	                error: 'Error, please try again'
	            });
	        } else {
	            let data = JSON.parse(body);
            	if ((data.count > 0) || (data.count !== 5138)) {
            		res.send(data);
            	} else {
            		res.send("No data found");
            	}
	        }
	    });
	}
});

app.post('/test', (req, res) => {
	const keyword = req.body.keyword;
	const url = `https://quote-garden.herokuapp.com/quotes/search/${keyword}`;
	request(url, (err, response, body) => {
		if (keyword != '') {
			if (err) {
	            res.send({
	                data: null,
	                error: 'Error, please try again'
	            });
	        } else {
	            res.status(200).send(body);
	        }
		} else {
			res.send({
                count: 0,
                results: []
            });
			
		}
	});
});

app.get('/testdb/:name', (req, res) => {
	let name = req.params.name; 
	res.status(200).send(name);
});

app.post('/testdb/', (req, res) => {
	res.status(200).send('testdb');
});




app.get('/mongotest', (req, res, next) => {

	const uri = "mongodb+srv://jagancity:2TK17FGCQ8Ve3ers@nodeblog-42zxo.mongodb.net/?retryWrites=true&w=majority";
	const client = MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
	client.connect(err => {
		const db = client.db("blog");
		const articles = db.collection("articles").find();
		console.log(articles)
	});

	res.status(200).send("MongoDB");
	client.close();
});


app.get('/mysql/user', (req, res) => {
	var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "inv"
	});

	con.connect();

	con.query("SELECT * FROM invoiceservices", (err, result, fields) => {
		res.status(200).send(JSON.stringify(result))
  	});
});

app.post('/mysql/user/new', (req, res) => {
	const {username} = req.body;
	var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "inv"
	});

	con.connect();

	con.query("SELECT * FROM invoiceservices", (err, result, fields) => {
		res.status(200).json({username: username})
		console.log(username)
  	});
});
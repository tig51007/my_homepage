const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3000;
const route = require('./routes/index');

app.use(cors());

app.use(bodyParser.json());
app.use('/api', route);
//app.use('/api', (req, res)=> res.json({username:'bryan'}));
var http = require("http");

var path = require("path");








app.use(express.static(path.join(__dirname, 'public')));



app.use(bodyParser.urlencoded({ extended : false }));



app.post("http://localhost:3001/%5Cmy_homepage%5Clogin.do#/", function(req, res){
	console.log("user login");
	var theSummoner = req.body.theSummoner;
	console.log(theSummoner);
	res.send(theSummoner);
});

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
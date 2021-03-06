
var express = require('express');
var methodOverride = require('method-override');

var bodyParser = require('body-parser');
var app = express();


var PORT = process.env.PORT || 3000;

var theDatabase = require('./models');

app.use(express.static(process.cwd() + '/public'));


app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controller');

app.use('/', routes);

theDatabase.sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log("Connected on Port: " + PORT);
	});
});

// var port = 3000;

// var app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + "/public"));

// app.use(bodyParser.urlencoded({ extended: false }));

// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use("/", routes);

// app.listen(port); 
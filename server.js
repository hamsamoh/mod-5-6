var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dotenv = require('dotenv')
dotenv.config()

var userRoutes = require('./routes/user-routes.js');
var productRoutes = require('./routes/product-routes.js');

var dbURL = process.env.DB_URL;
var dbConfig = {
    "useNewUrlParser": true,
    "useUnifiedTopology": true
}

mongoose
.connect(dbURL,dbConfig)
.then(
    function() {
        console.log("Database is connected");
    }
)
.catch(
    function(dbError) {
        console.log('Database connection error', dbError)
    }
);

var bodyParserConfig = {extended: false};
server.use( bodyParser.urlencoded(bodyParserConfig))
server.use( bodyParser.json());


server.get(
    '/',
    function(req, res) {
         res.send("<h1>Welcome to the !</h1>");
    }
);

server.use(
    '/users', userRoutes
);

server.use(
    '/products', productRoutes
);

server.listen(
    process.env.PORT,
    function() {
        console.log('Server running at http://localhost:3001/')
    }
);

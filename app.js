var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/client/views');
app.set('view engine', 'html');

// path setup
app.use(express.static(path.join(__dirname, 'client')));


app.use('/', require('./server/routes/routes.js'));


// Start server
var serverPort = 4000;
app.listen(serverPort, function() {
   console.log("Server started on port "+serverPort);
});


// Expose app
module.exports = app;
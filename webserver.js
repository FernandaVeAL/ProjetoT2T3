var express = require('express');
var app = express();

app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.use('/public', express.static(__dirname + '/public'));

var server = app.listen(8080);

/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server on port', app.get('port'));
});

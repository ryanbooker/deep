var express = require('express');
var server = express();

server.get('/.well-known/apple-app-site-association', function(request, response) {
  response.contentType('application/json')
  response.sendFile(__dirname + '/.well-known/apple-app-site-association');
});

server.get('*', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

server.listen(3000)

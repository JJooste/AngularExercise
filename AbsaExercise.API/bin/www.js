var app = require('../server');
var http = require('http');
var db = require('../config/database');
var mongoose = require('mongoose');
var country = require('../models/country');
var countryRepo = require('../repositories/country-repository');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

addDefaultCountries();

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// Event listener for HTTP server "error" event
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event.
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
}


//Populate lookup tables
function addDefaultCountries() {
  countryRepo.getAll(function (error, countries) {
    if (!countries || countries.length == 0) {
      createCountry('South Africa');
      createCountry('Namibia');
      createCountry('Botswana');
      createCountry('Zimbabwe');
    }
  });
}

function createCountry(name) {
  var c = new country();
  c.name = name;
  countryRepo.create(c, function (error, country) { });
}


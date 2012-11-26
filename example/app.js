
/**
 * Module dependencies.
 */

var express = require('express')
  , controllers = require('./controllers')
  , http = require('http')
  , path = require('path');

var app = express()
  , server = http.createServer(app)
  , manipulator = require('./manipulator')(server);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', controllers.index);

server.listen(3000);

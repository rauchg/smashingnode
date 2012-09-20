
/**
 * Module dependencies.
 */

var connect = require('connect')
  , time = require('./request-time')

/**
 * Create server.
 */

var server = connect.createServer();

/**
 * Log requests.
 */

server.use(connect.logger('dev'));

/**
 * Implement time middleware.
 */

server.use(time({ time: 500 }));

/**
 * Fast response.
 */

server.use(function (req, res, next) {
  if ('/a' == req.url) {
    res.writeHead(200);
    res.end('Fast!');
  } else {
    next();
  }
});


/**
 * Slow response.
 */

server.use(function (req, res, next) {
  if ('/b' == req.url) {
    setTimeout(function () {
      res.writeHead(200);
      res.end('Slow!');
    }, 1000);
  } else {
    next();
  }
});

/**
 * Listen.
 */

server.listen(3000);

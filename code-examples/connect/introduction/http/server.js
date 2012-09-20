
/**
 * Module dependencies.
 */

var http = require('http')
  , fs = require('fs')

/**
 * Create our server.
 */

var server = http.createServer(function (req, res) {
  if ('GET' == req.method && '/images' == req.url.substr(0, 7)
    && '.jpg' == req.url.substr(-4)) {
    fs.stat(__dirname + req.url, function (err, stat) {
      if (err || !stat.isFile()) {
        res.writeHead(404);
        res.end('Not Found');
        return;
      }
      serve(__dirname + req.url, 'application/jpg');
    });
  } else if ('GET' == req.method && '/' == req.url) {
    serve(__dirname + '/index.html', 'text/html');
  } else {
    res.writeHead(404);
    res.end('Not found');
  }

  function serve (path, type) {
    res.writeHead(200, { 'Content-Type': type });
    fs.createReadStream(path).pipe(res);
  }
});

/**
 * Listen.
 */

server.listen(3000);

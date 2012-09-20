var http = require('http');

http.createServer(function () {
  throw new Error('This will be uncaught')
}).listen(3000)


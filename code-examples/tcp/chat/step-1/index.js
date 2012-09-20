
/**
 * Module dependencies.
 */

var net = require('net')

/**
 * Create server.
 */

var server = net.createServer(function (conn) {
  // handle connection
  console.log('\033[90m   new connection!\033[39m');
});

/**
 * Listen.
 */

server.listen(3000, function () {
  console.log('\033[96m   server listening on *:3000\033[39m');
});

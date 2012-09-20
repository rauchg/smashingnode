
/**
 * Module dependencies.
 */

var net = require('net')

/**
 * Keep track of connections.
 */

var count = 0;

/**
 * Create server.
 */

var server = net.createServer(function (conn) {
  conn.write(
      '\n > welcome to \033[92mnode-chat\033[39m!'
    + '\n > ' + count + ' other people are connected at this time.'
    + '\n > please write your name and press enter: '
  );
  count++;
  conn.on('close', function () {
    count--;
  });
});

/**
 * Listen.
 */

server.listen(3000, function () {
  console.log('\033[96m   server listening on *:3000\033[39m');
});


var net = require('net');

var client = net.createConnection(6667, 'irc.freenode.net')
client.setEncoding('utf-8')

client.on('connect', function () {
  client.write('NICK mynick\r\n');
  client.write('USER mynick 0 * :realname\r\n');
  client.write('JOIN #node.js\r\n');
});


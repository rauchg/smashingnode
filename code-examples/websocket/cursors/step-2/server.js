
var express = require('express')
  , wsio = require('websocket.io')

/**
 * Create express app.
 */

var app = express.createServer();

/**
 * Attach websocket server.
 */

var ws = wsio.attach(app);

/**
 * Serve our code
 */

app.use(express.static('public'))

/**
 * Listening on connections
 */

var positions = {}
  , total = 0

ws.on('connection', function (socket) {
  // we give the socket an id
  socket.id = ++total;

  // we send the positions of everyone else
  socket.send(JSON.stringify(positions));

  socket.on('message', function (msg) {
    try {
      var pos = JSON.parse(msg);
    } catch (e) {
      return;
    }

    positions[socket.id] = pos;
    broadcast(JSON.stringify({ type: 'position', pos: pos, id: socket.id }));
  });

  socket.on('close', function () {
    delete positions[socket.id];
    broadcast(JSON.stringify({ type: 'disconnect', id: socket.id }));
  });

  function broadcast (msg) {
    for (var i = 0, l = ws.clients; i < l; i++) {
      // we avoid sending a message to the same socket that broadcasts
      if (socket.id != ws.clients[i].id) {
        // we call `send` on the other clients
        ws.clients[i].send(msg);
      }
    }
  }
});

/**
 * Listen
 */

app.listen(3000);

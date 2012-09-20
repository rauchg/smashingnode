
/**
 * Module dependencies.
 */

var connect = require('connect')

/**
 * Create server.
 */

var server = connect.createServer();

/**
 * Perform logging.
 */

server.use(connect.logger({ format: 'type is :res[content-type], length is '
  + ':res[content-length] and it took :response-time ms.', immediate: false }));

/**
 * Handle static files.
 */

server.use(connect.static(__dirname + '/website'));

/**
 * Listen.
 */

server.listen(3000);


/**
 * Module dependencies.
 */

var connect = require('connect')

/**
 * Create server
 */

var server = connect(
    connect.methodOverride()
  , connect.logger('dev')
);

/**
 * Listen
 */

server.listen(3000);

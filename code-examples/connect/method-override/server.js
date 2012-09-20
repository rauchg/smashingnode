
/**
 * Module dependencies.
 */

var connect = require('connect')

/**
 * Create server
 */

var server = connect(
    connect.logger('dev')
  , connect.methodOverride()
);

/**
 * Listen
 */

server.listen(3000);

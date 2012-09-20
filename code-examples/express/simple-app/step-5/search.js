
/**
 * Module dependencies.
 */

var qs = require('querystring')
  , http = require('http')

/**
 * Search function.
 *
 * @param {String} search query
 * @param {Function} callback
 * @api public
 */

module.exports = function search (query, fn) {
  http.request({
      host: 'search.twitter.com'
    , path: '/search.json?' + qs.stringify({ q: query })
  }, function (res) {
    res.setEncoding('utf8');

    var body = '';

    res.on('data', function (chunk) {
      body += chunk;
    });

    res.on('end', function () {
      try {
        var obj = JSON.parse(body);
      } catch (e) {
        return fn(new Error('Bad twitter response'));
      }

      fn(null, obj.results);
    });
  }).end()
};

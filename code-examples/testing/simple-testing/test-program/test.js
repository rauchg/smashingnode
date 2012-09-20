
/**
 * Module dependencies.
 */

var request = require('superagent')
  , assert = require('assert')

/**
 * Tests /search?q=<tweet>
 */

request.get('http://localhost:3000')
  .data({ q: 'bieber' })
  .exec(function (err, res) {
    if (err) throw err;

    // assert correct status code
    assert.ok(200 == res.status);

    // assert presence of search keyword
    assert.ok(~res.text.toLowerCase().indexOf('bieber');

    // assert list items
    assert.ok(~res.text.indexOf('<li>');
  });

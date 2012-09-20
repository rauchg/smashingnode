
/**
 * Module requirements.
 */

var express = require('express')
  , search = require('./search')

/**
 * Create app.
 */

var app = express.createServer() // NOTE: express3 is express()

/**
 * Configuration
 */

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: false }); // NOTE: express3 remove

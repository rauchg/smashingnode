
/**
 * Module dependencies.
 */

var express = require('express')

/**
 * Create app.
 */

app = express.createServer();

/**
 * Configure app.
 */

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

/**
 * Main route
 */

app.get('/', function (req, res, next) {
  res.render('index');
});

/**
 * Item creation route.
 */

app.post('/create', function (req, res, next) {
});

/**
 * Item route.
 */

app.get('/item/:id', function (req, res, next) {
  res.render('item');
});

/**
 * Item review creation route.
 */

app.post('/item/:id/review', function (req, res, next) {
});

/**
 * Listen.
 */

app.listen(3000, function () {
  console.log(' - listening on http://*:3000');
});

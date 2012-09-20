
/**
 * Module dependencies.
 */

var express = require('express')
  , mysql = require('mysql')
  , config = require('./config')

/**
 * Create app.
 */

app = express.createServer();

/**
 * Middleware.
 */

app.use(express.bodyParser());

/**
 * Configure app.
 */

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

/**
 * Main route
 */

app.get('/', function (req, res, next) {
  res.render('index', { items: [] });
});

/**
 * Item creation route.
 */

app.post('/create', function (req, res, next) {
  db.query('INSERT INTO item SET title = ?, description = ?',
  [req.body.title, req.body.description], function (err, info) {
    if (err) return next(err);
    console.log(' - item created with id %s', info.insertId);
    res.redirect('/');
  });
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
  db.query('INSERT INTO review SET item_id = ?, stars = ?, text = ?',
  [req.params.id, req.body.stars, req.body.text], function (err, info) {
    if (err) return next(err);
    console.log(' - review created with id %s', info.insertId);
    res.redirect('/item/' + req.params.id);
  });
});

/**
 * Connect to MySQL
 */

var db = mysql.createClient(config);

/**
 * Listen.
 */

app.listen(3000, function () {
  console.log(' - listening on http://*:3000');
});

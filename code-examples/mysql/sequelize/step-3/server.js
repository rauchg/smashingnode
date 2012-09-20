
/**
 * Module dependencies.
 */

var express = require('express')
  , Sequelize = require('sequelize')

/**
 * Create app.
 */

app = express.createServer();

/**
 * Instantiate sequelize.
 */

var sequelize = new Sequelize('todo-example')

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
 * Project deletion route.
 */

app.del('/project/:id', function (req, res, next) {
});

/**
 * Project creation route.
 */

app.post('/projects', function (req, res, next) {
});

/**
 * Show tasks for project.
 */

app.get('/project/:id/items', function (req, res, next) {
});

/**
 * Add tassk for project.
 */

app.post('/project/:id/items', function (req, res, next) {
});

/**
 * Item route.
 */

app.del('/item/:id', function (req, res, next) {
});
/**
 * Listen.
 */

app.listen(3000, function () {
  console.log(' - listening on http://*:3000');
});

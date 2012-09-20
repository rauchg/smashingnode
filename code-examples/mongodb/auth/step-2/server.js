
/**
 * Module dependencies.
 */

var express = require('express')
  , mongodb = require('mongodb')

/**
 * Set up application.
 */

app = express.createServer()

/**
 * Middleware.
 */

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'my secret' }));

/**
 * Specifiy our views options.
 */

app.set('view engine', 'jade');

/**
 * Default route
 */

app.get('/', function (req, res) {
  res.render('index', { authenticated: false });
});

/**
 * Login route
 */

app.get('/login', function (req, res) {
  res.render('login');
});

/**
 * Signup route
 */

app.get('/signup', function (req, res) {
  res.render('signup');
});

/**
 * Listen
 */

app.listen(3000, function () {
  console.log('\033[96m  + \033[39m app listening on *:3000');
});

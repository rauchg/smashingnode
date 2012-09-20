
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

app.get('/login/:signup-email', function (req, res) {
  res.render('login', { signupEmail: req.params.signupEmail });
});

/**
 * Login process route
 */

app.post('/login', function (req, res) {
  app.users.findOne(req.body.user, function (err, doc) {
    if (err) return next(err);
    if (!doc) return res.send('<p>User not found. Go back and try again');
    req.session.loggedIn = doc._id;
    res.redirect('/');
  });
});

/**
 * Signup route
 */

app.get('/signup', function (req, res) {
  res.render('signup');
});

/**
 * Signup processing route
 */

app.post('/signup', function (req, res, next) {
  app.users.insert(req.body.user, function (err, doc) {
    if (err) return next(err);
    res.redirect('/login/' + doc[0].email);
  });
});

/**
 * Logout route.
 */

app.get('/logout', function (req, res) {
  req.session.loggedIn = null;
  res.redirect('/');
});

/**
 * Connect to the database.
 */

var server = new mongodb.Server('127.0.0.1', 27017)
new mongodb.Db('my-website', server).open(function (err, client) {
  // don't allow our app to start if there was an error
  if (err) throw err;

  console.log('\033[96m  + \033[39m connected to mongodb');

  // set up collection shortcuts
  app.users = new mongodb.Collection(client, 'users');

  client.ensureIndex('users', 'email', function (err) {
    if (err) throw err;
    client.ensureIndex('users', 'password', function (err) {
      if (err) throw err;

      console.log('\033[96m  + \033[39m ensured indexes');

      // listen
      app.listen(3000, function () {
        console.log('\033[96m  + \033[39m app listening on *:3000');
      });
    });
  });
});

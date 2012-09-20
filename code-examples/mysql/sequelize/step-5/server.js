
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

var sequelize = new Sequelize('todo-example', 'root')

/**
 * Define project model.
 */

var Project = sequelize.define('Project', {
    title: Sequelize.STRING
  , description: Sequelize.TEXT
  , created: Sequelize.DATE
});

/**
 * Define task model.
 */

var Task = sequelize.define('Task', {
    title: Sequelize.STRING
});

/**
 * Set up association.
 */

Task.belongsTo(Project);
Project.hasMany(Task);

/**
 * Synchronize.
 */

sequelize.sync();

/**
 * Configure app.
 */

app.set('view engine', 'jade');
app.set('view options', { layout: false });
app.set('views', __dirname + '/views');

/**
 * Middleware
 */

app.use(express.static(__dirname + '/public')); 
app.use(express.bodyParser());

/**
 * Main route
 */

app.get('/', function (req, res, next) {
  Project.findAll()
    .success(function (projects) {
      res.render('index', { projects: projects });
    })
    .error(next);
});

/**
 * Project deletion route.
 */

app.del('/project/:id', function (req, res, next) {
  Project.find(Number(req.params.id)).success(function (proj) {
    proj.destroy()
      .success(function () {
        res.send(200);
      })
      .error(next);
  }).error(next);
});

/**
 * Project creation route.
 */

app.post('/projects', function (req, res, next) {
  Project.build(req.body).save()
    .success(function (obj) {
       res.send(obj.values);
     })
    .error(next)
});

/**
 * Show tasks for project.
 */

app.get('/project/:id/tasks', function (req, res, next) {
  Project.find(Number(req.params.id))
    .success(function (project) {
      project.getTasks().on('success', function (tasks) {
        res.render('tasks', { project: project, tasks: tasks });
      })
    })
    .error(next)
});

/**
 * Add tassk for project.
 */

app.post('/project/:id/tasks', function (req, res, next) {
  req.body.ProjectId = req.params.id;
  Task.build(req.body).save()
    .success(function (obj) {
       res.send(obj.values);
     })
    .error(next)
});

/**
 * Item route.
 */

app.del('/task/:id', function (req, res, next) {
  Task.find(Number(req.params.id)).success(function (task) {
    task.destroy()
      .success(function () {
        res.send(200);
      })
      .error(next)
  }).error(next);
});

/**
 * Listen.
 */

app.listen(3000, function () {
  console.log(' - listening on http://*:3000');
});

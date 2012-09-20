
/**
 * Module dependencies.
 */

var express = require('express')
  , mongoose = require('mongoose')

/**
 * Create app
 */

app = require('express').createServer();

/**
 * Connect to mongoose
 */

mongoose.connect('mongodb://localhost/my-blog');

/**
 * Define our model.
 */

var BlogPost = mongoose.model('BlogPost', require('./blogpost'));

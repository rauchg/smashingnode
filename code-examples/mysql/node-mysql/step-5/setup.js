
/**
 * Module dependencies.
 */

var mysql = require('mysql')
  , config = require('./config')

/**
 * Initialize client.
 */

var db = mysql.createClient(config);

/**
 * Create database.
 */

db.query('CREATE DATABASE cart-example');

/**
 * Create tables.
 */

db.query('CREATE TABLE item (' +
  'id INT(11) AUTO_INCREMENT,' +
  'title VARCHAR(255),' +
  'description TEXT,' +
  'created DATETIME,' +
  'PRIMARY KEY (id))');

db.query('CREATE TABLE review (' +
  'id INT(11) AUTO_INCREMENT,' +
  'item_id INT(11),' +
  'text TEXT,' +
  'stars INT(1),' +
  'created DATETIME,' +
  'PRIMARY KEY (id))');

/**
 * Close client.
 */

db.end();

const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  res.render('todo', {todoList: todoList})
})

const todoList = [
  {"list":"Learn Node basics", "status":"checked"},
  {"list":"Learn Express Basics", "status":"checked"},
  {"list":"Learn Mustache", "status":"checked"},
  {"list":"Learn HTML forms with Express", "status":"null"},
  {"list":"Learn about Authentication", "status":"null"},
  {"list":"Learn how to connect to PostgreSQL", "status":"null"},
  {"list":"Learn how to create databases", "status":"null"},
  {"list":"Learn SQL", "status":"null"},
  {"list":"Learn how to connect to PostgreSQL from Node", "status":"null"},
  {"list":"Learn how to use Sequelize", "status":"null"},
]

app.listen(3000, function () {
  console.log('Successfully started express application!');
})

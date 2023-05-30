const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require(__dirname + '/date.js');

//console.log(date());

let addTodos = [];
let workItems = [];

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

//ejs, always place after app is declared
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); //bodyparser and post won't work without this.
app.use(express.static('public')); // css and images must be in the public directory to work.

app.get('/', (req, res) => {
  let day = date.getDate(); //module from date.js
  res.render('list', {
    listTitle: day,
    newTodos: addTodos,
  });
});

app.post('/', (req, res) => {
  let addTodo = req.body.newItem;
  if (req.body.list === 'Work') {
    workItems.push(addTodo); //your 'item' on the vid is 'addTodo'
    res.redirect('/work');
  } else {
    addTodos.push(addTodo);
    res.redirect('/');
  }
  // res.send(`${firstName} ${lastName}, ${email}`);
});

// work route
app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'Work List', newTodos: workItems });
});

app.post('/work', (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect('/work');
});

app.get('/about', (req, res) => {
  res.render('about');
});

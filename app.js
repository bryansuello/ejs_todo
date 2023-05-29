const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let addTodos = [];

app.listen(3000, () => {
  console.log('server is running on port 3000');
})

//ejs, always place after app is declared
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true})); //bodyparser and post won't work without this.
app.use(express.static('public')); // css and images must be in the public directory to work.

app.get('/', (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  //let day = "";
  let dayName = "";
  // if (currentDay === 6 || currentDay === 0) {
  //   //res.send('happy weekend');
  //   day = "Weekend";
  //   //res.sendFile(__dirname + '/weekend.html');
  // }
  // else {
  //   day = "Weekday";
  //   //res.send('happy shitday');
  // }
    //res.render('list', {kindOfDay: day })
  (currentDay === 0) ? dayName = 'Sunday' : (currentDay === 1) ? dayName = 'Monday' : (currentDay === 2) ? dayName = 'Tuesday' : (currentDay === 3) ? dayName = 'Wednesday' : (currentDay = 4) ? dayName = 'Thursday' : (currentDay === 5) ? dayName = 'Friday' : dayName = 'Saturday';
  // should have used SWITCH, more than 5 statements lol

  //res.render('list', {kindOfDay: dayName});

  let options = {
    weekday : "long",
    day: "numeric",
    month: "long"
  }
  var day = today.toLocaleString('en-US', options);
  res.render('list', {
    kindOfDay : day,
    newTodos: addTodos
  })

})


app.post('/', (req, res) => {
  let addTodo = req.body.newItem;

  addTodos.push(addTodo);

  // res.send(`${firstName} ${lastName}, ${email}`);
  res.redirect('/');
})

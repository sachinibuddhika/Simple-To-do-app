var express=require('express');
var TodoController=require('./controllers/TodoController');
var app=express();

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./assets'));

//listen to port
app.listen(3000);
console.log('you are listening to port 3000');

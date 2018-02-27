const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');

const app = express();

const profile = require('./routes/profile');

Profile = require('./models/Profile'); // brings in the profiles collection model

app.set('views', './views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/credit-repair');
var db = mongoose.connection;
db.once('open', () => {
  console.log('db connected')
});

app.use('/profile', profile);

app.use(bodyParser.json()); // body-parser middleware
app.use(bodyParser.urlencoded({extended: false})); // body-parser middleware
app.use(express.static(path.join(__dirname, 'public')));

app.set('json spaces', 2); // makes the json formatted info pretty

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('server connected');
});

module.exports = app;

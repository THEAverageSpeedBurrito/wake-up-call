//Server dependencies and middleware
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const knex = require('./knex');

const port = process.env.PORT || 5000;

//Start server
app.listen(port, () => {
  console.log('Listening on port', port);
});

//Routes
const users = require('./routes/users');
const journals = require('./routes/journals');
const tweets = require('./routes/tweets');

app.use('/users', users);
app.use('/journals', journals);
app.use('/tweets', tweets);

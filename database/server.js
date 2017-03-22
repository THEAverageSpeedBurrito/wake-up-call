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

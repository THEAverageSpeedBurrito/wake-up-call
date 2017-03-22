const express = require('express');
const router = express.Router();

const knex = require('../knex');

router.get('/', (req, res) => {
  res.send('hello world');
});

module.exports = router;

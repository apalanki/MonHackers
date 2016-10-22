'use strict';
var search = require('./shelter_search.js');
const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    res.json('Hello World!');
});

router.post('/search', (req, res) => {
	res.json(search.get_matching_shelters(req.body));
});

module.exports = router;
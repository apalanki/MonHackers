'use strict';
var search = require('./shelter_search.js');
const express = require('express');
const router = express.Router();
const assert = require('assert');
const dao = require('./mongo/dao');

function return400(err) {
    return res.status(400).send({'error': err});
}

router.get('/applicant', (req, res) => {
    dao.getAllApplicants((err, result) => err ? return400(err) : res.send(result))
});

router.post('/applicant', (req, res) => {
    if (req.body == {}) {
        return return400('No body');
    } else {
        dao.insertApplicant(req.body, (err) => err ? return400(err) : res.status(200).send('Success'));
    }
});

router.post('/search', (req, res) => {
    if (req.body === {}) return return400('No Body');
    else {

        res.json(search.get_matching_shelters(req.body));
    }
});

module.exports = router;

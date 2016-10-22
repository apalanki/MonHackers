'use strict';
var search = require('./shelter_search.js');
const express = require('express');
const router = express.Router();
const find = require('../mongo/find');
// const insert = require('../mongo/insert');
const MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
const url = 'mongodb://monhackers:monhackers@ds023603.mlab.com:23603/globalhack6';

router.get('/applicant', (req, res) => {
    console.log(req.body);
    if (req.body == {}) {
        console.log("No body found");
        return res.status(400).send({"error": "No body"});
    }
    else {
        // Use connect method to connect to the Server
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            if (err) {
                console.log("Error");
            }
            else {
                console.log("Connected correctly to server");
                find(db, 'applicants', (result, err) => {
                    console.log("sending db results back");
                    if (err) {
                        return res.send("error found");
                    }
                    else {
                        return res.send(result);
                    }
                });
            }
            db.close();
        });
    }
});

router.post('/applicant', (req, res) => {
    if (req.body == {}) {
        console.log("No body found");
        return res.status(400).send({"error": "No body"});
    }
    else {
        console.log("body found");
        const t = req.body;
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            if (err) {
                console.log("Error");
            }
            else {
                // console.log("Connected correctly to server");
                const col = db.collection('applicants');
                col.insert([t]);
                res.status(200).send("Success");
                db.close();
            }
        });
    }
});

router.post('/search', (req, res) => {
    res.json(search.get_matching_shelters(req.body));
});

module.exports = router;

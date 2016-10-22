/**
 * Created by anudeeppalanki on 10/22/16.
 */

const find = require('./util/find');
// const insert = require('./util/insert');
const MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
const url = 'mongodb://monhackers:monhackers@ds023603.mlab.com:23603/globalhack6';

function getAllApplicants(callback) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        if (err) {
            callback(err);
        }
        else {
            find(db, 'applicants', (err, result) => {
                callback(null, result);
            });
        }
        db.close();
    });
}

function insertApplicant(applicant, callback) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        if (err) callback(err);
        else {
            const col = db.collection('applicants');
            col.insert([applicant]);
            db.close();
            callback();
        }
    });
}

function getShelterDetails(){
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        if (err) {
            callback(err);
        }
        else {
            find(db, 'shelters', (err, result) => {
                callback(null, result);
            });
        }
        db.close();
    });
}

module.exports = {
    getAllApplicants: getAllApplicants,
    insertApplicant: insertApplicant,
    getShelterDetails: getShelterDetails
};

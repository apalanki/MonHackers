const find = require('./util/find');
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://monhackers:monhackers@ds023603.mlab.com:23603/globalhack6';

function getAllApplicants(callback) {
    MongoClient.connect(url, function (err, db) {
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
        if (err) callback(err);
        else {
            const col = db.collection('applicants');
            col.insert([applicant]);
            db.close();
            callback();
        }
    });
}

function getShelterDetails(callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) callback(err);
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

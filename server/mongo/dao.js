const find = require('./util/find');
const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://monhackers:monhackers@ds023603.mlab.com:23603/globalhack6';

function getAllApplicants(callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) callback(err);
        else {
            find(db, 'applicants', {}, (err, result) => {
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

function getShelterDetails(callback, requestQuery) {
    var query = {};
    if (requestQuery['Gender']) requestQuery.gender === 'female' ? query['$or'] = [{'single_women_18+': 'yes'}, {'pregnant_women_only': 'yes'}] : query['single_men_18+'] = 'yes';
    if (requestQuery['Veteran Status']) query['veteran_support'] = requestQuery.veteran;
    MongoClient.connect(url, function (err, db) {
        if (err) callback(err);
        else {
            find(db, 'shelters', query, (err, result) => {
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

const find = require('./util/find');
const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://monhackers:monhackers@ds023603.mlab.com:23603/globalhack6';
const handle = (err, result, callback) => {
    if (err) callback(err, null);
    else callback(null, result);
};

function getAllPeople(callback) {
    console.log("getting all people");
    MongoClient.connect(url, function (err, db) {
        if (err) {
            callback(err);
        }
        else {
            find(db, 'people', {}, (err, result) => {
                handle(err, result, callback);
            });
        }
        db.close();
    });
}
function getAllApplicants(callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) callback(err);
        else {
            find(db, 'applicants', {}, (err, result) => {
                handle(err, result, callback);
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

function isDefined(data) {
    return data !== 'Unspecified';
}

function getShelterDetails(requestQuery, callback) {
    var query = {};
    if (isDefined(requestQuery['gender'])) {
        requestQuery.gender === 'female'
            ? query['$or'] = [{'single_women_18+': 'yes'}, {'pregnant_women_only': 'yes'}]
            : query['single_men_18+'] = 'yes';
    }
    if (isDefined(requestQuery['veteran'])) query['veteran_support'] = requestQuery.veteran;
    MongoClient.connect(url, function (err, db) {
        if (err) callback(err);
        else find(db, 'shelters', query, (err, result) => handle(err, result, callback));
        db.close();
    });
}

module.exports = {
    getAllApplicants: getAllApplicants,
    insertApplicant: insertApplicant,
    getShelterDetails: getShelterDetails,
    getAllPeople: getAllPeople
};

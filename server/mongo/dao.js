const find = require('./util/find');
const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://monhackers:monhackers@ds023603.mlab.com:23603/globalhack6';
const handle = (err, result, callback) => {
    if (err) callback(err, null);
    else callback(null, result);
};
const _ = require('underscore');
const util = require('util');

const getAll = (collectionName, callback) => {
    MongoClient.connect(url, function (err, db) {
        if (err) callback(err);
        else {
            db.collection(collectionName).find().toArray((err, result) => {
                handle(err, result, callback);
                db.close();
            });
        }
    });
};

function getAllPeople(callback) {
    console.log("getting all people");
    getAll('people', callback);
}

function getAllApplicants(callback) {
    console.log("getting all applicants");
    getAll('applicant', callback);
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
    return (data != null && data !== 'Unspecified');
}

const generateGenderQuery = (value,query) => {
    return value === 'Female'
        ? query['$or'] = [{'single_women_18+': 'yes'}, {'pregnant_women_only': 'yes'}]
        : query['single_men_18+'] = 'yes';
}

function shelterSearch(requestQuery, callback) {
    var query = {}; var genQuery = {};
    var subquery = {};
    console.log("requstQuery" + util.inspect(requestQuery));
    const count = _(requestQuery).filter( (item) => {
        return isDefined(item);
    }).length;
    console.log("count=" + count);
    if (isDefined(requestQuery['gender'])) {
        generateGenderQuery(requestQuery.gender, genQuery);
    }
    if (isDefined(requestQuery['veteran']) && requestQuery['veteran'].toLowerCase() === 'yes' ) {
        subquery['veteran_support'] = requestQuery.veteran.toLowerCase();
    }
    if (isDefined(requestQuery['services'])){
        subquery['services'] = requestQuery.services;
    }
    if(count > 1 && isDefined(requestQuery['gender'])){
        console.log("And query detected");
        console.log(subquery);
        query['$and'] = [];
        query['$and'].push(genQuery);
        query['$and'].push(subquery);
    }

    else query = subquery;

    console.log("subquery");
    console.log(subquery);

    console.log("q=" + util.inspect(query));
    console.log("q=" + util.inspect(query['$and']));

    MongoClient.connect(url, function (err, db) {
        if (err) callback(err);
        else find(db, 'shelters', query, (err, result) => handle(err, result, callback));
        db.close();
    });
}

module.exports = {getAllApplicants, insertApplicant, shelterSearch, getAllPeople};

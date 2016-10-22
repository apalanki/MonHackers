const express = require('express');
const router = express.Router();
const dao = require('./mongo/dao');

function returnFailure(res, err) {
    return res.status(400).send({'error': err});
}

function returnSuccess(res, message) {
    return res.status(200).send(message);
}

router.get('/applicant', (req, res) => {
    dao.getAllApplicants((err, result) => err ? returnFailure(res, err) : returnSuccess(res, result));
});

router.post('/applicant', (req, res) => {
    if (req.body == {}) return returnFailure('No body');
    else dao.insertApplicant(req.body, (err) => err ? returnFailure(res, err) : returnSuccess(res, 'Success'));
});

router.get('/search', (req, res) => {
    dao.getShelterDetails((err, result) => {
        if(err) returnFailure(res, err);
        else returnSuccess(res, result);
    });
});

module.exports = router;
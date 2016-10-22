var NodeGeocoder = require('node-geocoder');
var _ = require('underscore');
var options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: 'AIzaSyAiZkKIU7MaBhY814lPkzC5srl78SjL-HE',
    formatter: null
};
var geocoder = NodeGeocoder(options);
const logger = require('log4js').getLogger();

function getLatLongFromGeoCoder(location, callback) {
    geocoder.geocode(location.address, function (err, data) {
        if (err) callback(err);
        else callback(null, _.extend(_.pick(data[0], ['latitude', 'longitude']), location));
    });
}

function addLatLongsToShelters(shelters, callback) {
    var length = shelters.length;
    var results = [];
    shelters.map(function (location, index) {
        getLatLongFromGeoCoder(location, function (err, extendedLocation) {
            if (err) logger.error(err);
            results.push(extendedLocation);
            if (index == length - 1) return callback(null, results);
        });
    });
}

module.exports = {
    addLatLongToSheltersArray: addLatLongsToShelters
};

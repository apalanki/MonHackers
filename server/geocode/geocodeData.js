var NodeGeocoder = require('node-geocoder');
var _ = require('underscore');
var options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: 'AIzaSyAiZkKIU7MaBhY814lPkzC5srl78SjL-HE',
    formatter: null
};
var geocoder = NodeGeocoder(options);

function getLatLongFromGeoCoder(address, callback) {
    geocoder.geocode(address, function (err, data) {
        if (err) callback(err);
        else callback(null, _.pick(data[0], ['latitude', 'longitude']));
    });
}

module.exports = {
    getLatLong: getLatLongFromGeoCoder
};

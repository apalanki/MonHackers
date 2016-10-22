var _ = require('underscore');

var is_missing = function (client, property) {
    var prop = client[property];
    return (prop == null || prop.trim().length == 0);
};

var add_missing_attributes = function (shelter) {
    if (is_missing(shelter['client'], 'gender') &&
        !shelter['adult_genders'].length != 2) {
        shelter['missing_requirements'] = ['gender'];
    }
    return shelter;
};

var is_gender_qualified = function (shelter) {
    var client = shelter['client'];
    return (is_missing(client, 'gender') ||
    shelter['adult_genders'].indexOf(client['gender']) >= 0);
};

var visible_keys = function (shelter) {
    return _.pick(shelter, ['name', 'missing_requirements',
        'lat', 'lon', 'address']);
};

exports.get_matching_shelters = function (client) {
    var shelters = [{
        name: 'Gateway 180',
        adult_genders: ['F'],
        lat: 38.637607,
        lon: -90.204658,
        address: '1000 N. 19th St. St. Louis, MO 63106'
    },
        {
            name: '12th & Park Shelter',
            adult_genders: ['M'],
            lat: 38.614469,
            lon: -90.204536,
            address: '1410 S Tucker Blvd, St. Louis, MO 63104'
        }];

    var add_client = (shelter) => {
        shelter['client'] = client;
        return shelter;
    };

    return _.chain(shelters)
        .map(add_client)
        .filter(is_gender_qualified)
        .map(add_missing_attributes)
        .map(visible_keys)
        .value();
};
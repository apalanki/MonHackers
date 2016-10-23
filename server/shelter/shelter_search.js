var _ = require('underscore');

var is_missing = function (client, property) {
    var prop = client[property];
    return (prop == null || prop.trim().length == 0);
};

var add_missing_attributes = function (shelter) {
    shelter['missing_requirements'] = [];
    has_gender_requirement = ((shelter['single_men_18+'] != 'yes') 
        || (shelter['single_women_18+'] != 'yes'));

    console.log("Has has_gender_requirement? ", has_gender_requirement);
    if (is_missing(shelter['client'], 'gender') && 
            has_gender_requirement){
        shelter['missing_requirements'] = ['gender'];
    }
    return shelter;
};

var visible_keys = function (shelter) {
    return _.pick(shelter, ['name', 'missing_requirements',
        'latitude', 'longitude', 'address', 'capacity']);
};

exports.evaluate_capacity = function(shelters, applicant, callback){
        var add_applicant = (shelter) => {
        shelter['client'] = applicant;
        return shelter;
    };

    callback(_.chain(shelters)
        .map(add_applicant)
        .map(add_missing_attributes)
        .map(visible_keys)
        .value());
};

var _ = require('lodash');
var charlatan = require('charlatan');

module.exports.Student = function(count) {
    var students = _.range(count).map(function() {
        return {
            name: {
                first: charlatan.Name.firstName(),
                last: charlatan.Name.lastName()
            },
            dob: charlatan.Date.birthday(1, 5)
        };
    })
    return students;
};
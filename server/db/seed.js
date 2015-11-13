var async = require('async');
var mongoose = require('mongoose');
var config = require('config');
var models = require('./models');
var generators = require('./generators');

const NUM_STUDENTS = 16;

async.series({
        init: function(callback) {
            console.log('init');
            mongoose.set('debug', true);
            mongoose.connect(config.get('mongoose.uri'));
            mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
            return mongoose.connection.once('open', callback);
        },
        clean: function(callback) {
            console.log('clean');
            return mongoose.connection.db.dropDatabase(callback);
        },
        students: function(callback) {
            console.log('students');
            var students = generators.Student(NUM_STUDENTS);
            var createStudents = students.map(function(snippet) {
                return models.Student.create.bind(models.Student, snippet);
            });
            return async.series(createStudents, callback);
        },
        exit: function(callback) {
            console.log('exit');
            return mongoose.disconnect(callback);
        }
    }, function(err) {
        if (err) {
            console.log('err', err);
            return false;
        }
        return true;
    });
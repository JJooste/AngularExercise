var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Member', memberSchema);
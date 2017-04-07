var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

countrySchema.pre('save', function (next) {
    next();
});


module.exports = mongoose.model('Country', countrySchema);
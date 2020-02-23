const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Cat = new Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('Cat', Cat);
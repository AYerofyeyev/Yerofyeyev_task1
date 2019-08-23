const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unpairSchema = new Schema({
    userId: {
        type: String,
        required: false
    },
    value: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Unpair', unpairSchema);

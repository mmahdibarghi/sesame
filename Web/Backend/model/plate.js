const mongoose = require('mongoose');


const plateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    car: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,

    },
    date: {
        type: Date,
        default: Date.now
    },
    plateNum: {
        type: String,
        required: true,
    },
    plateType: {
        type: String,
        required: false,
    }


});

module.exports = mongoose.model('Plate', plateSchema);
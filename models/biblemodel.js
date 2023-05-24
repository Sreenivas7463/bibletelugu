const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    book: {
        required: true,
        type: Object
    },
    count: {
        required: true,
        type: Number
    },
    chapters: {
        required: true,
        type: Array
    }
})

module.exports = mongoose.model('bible_telugus', dataSchema)
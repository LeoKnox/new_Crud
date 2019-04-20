const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Word = new Schema({
    word: {
        type: String
    },
    definition: {
        type: String
    },
    option1: {
        type: String
    },
    option2: {
        type: String
    },
    option3: {
        type: String
    }
},{
    collection: 'dictionary'
});

module.exports = mongoose.model('Word', Word);
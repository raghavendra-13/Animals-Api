const mongoose = require('mongoose');



const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    class: {
        type: String,
        required:true
    },
    habitat: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Posts', PostSchema);
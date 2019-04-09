const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
    text: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
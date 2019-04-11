const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
}, {
    timestamps: true
})

const postSchema = new mongoose.Schema ({
    text: String,
    tags: [],
    comments: [commentSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
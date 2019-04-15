const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    user: String,
}, {
    timestamps: true
})

const postSchema = new mongoose.Schema ({
    text: String,
    tags: [String],
    comments: [commentSchema], 
    user: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
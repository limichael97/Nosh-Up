const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    commentText: {
        type: String,
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


// const Comment = model('Comment', commentSchema);

// module.exports = Comment;

module.exports = commentSchema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {type: String, required: true},
    userID: {type: String, required: true},
    content: {type: String, required: true, minlength: 1, maxlength: 255},
    upvotes: {type: Number, required: true},
    downvotes: {type: Number, required: true},
    date: {type: String, required: true}
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
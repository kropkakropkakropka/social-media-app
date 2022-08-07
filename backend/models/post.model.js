const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    content: {type: String, required: true, unique: true, minlength: 1, maxlength: 255},
    upvotes: {type: Number, required: true},
    downvotes: {type: Number, required: true},
    date: {type: Date, required: true}
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
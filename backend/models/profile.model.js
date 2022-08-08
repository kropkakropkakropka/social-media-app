const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstname: {type: String, required: true, minlength: 2, maxlength: 15},
    lastname: {type: String, required: true, minlength: 2, maxlength: 25},
    username: {type: String, required: true, unique: true, minlength: 3, maxlength: 15},
    password: {type: String, required: true, minlength: 8, maxlength: 55},
    desc: {type: String, maxlength: 155, default:''},
    profileImg: {type: String, default:''},
    xp: {type: Number, required: true, default: 0},
    posts: {type: Object},
    friends: {type: Object}
},{timestamps: true})

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
const mongoose = require(mongoose);

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstname: {type: String, required: true, minlength: 2, maxlength: 15},
    lastname: {type: String, required: true, minlength: 2, maxlength: 25},
    username: {type: String, required: true, unique: true, minlength: 3, maxlength: 15},
    xp: {type: Number, required: true},
    posts: {type: Object}
})

const Profile = mongoose.model('User', profileSchema);

module.exports = Profile;
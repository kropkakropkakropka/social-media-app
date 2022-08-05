const router = require('express').Router();
const Profile = require('../models/profile.model');

//setting up route to get a profile
router.route('/').get((req, res)=>{
    Profile.find()
    .then(profile => res.json(profile))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/').get((req, res)=>{
    Profile.find({username: req.body.username})
    .then(profile => res.json(profile))
    .catch(error => res.status(400).json('Error: ' + error));
});
router.route('/create').post((req, res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const xp = 0;
    const posts = {};

    const newProfile = new Profile({
        firstname,
        lastname,
        username,
        xp,
        posts
    })

    newProfile.save()
    .then(() => res.json("Profile created"))
    .catch(error => res.status(400).json('Error: ' + error));
});
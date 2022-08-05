const router = require('express').Router();
const Post = require('../models/post.model');

//setting up route to get a post
router.route('/').get((req, res)=>{
    Post.find()
    .then(profile => res.json(profile))
    .catch(error => res.status(400).json('Error: ' + error));
});


//route for adding posts
router.route('/').post((req, res)=>{
    const content = req.body.content;
    const upvotes = 0;
    const downvotes = 0;
    const date = new Date;

    const newPost = new Post({
        content,
        upvotes,
        downvotes,
        date
    })
    newPost.save()
    .then(() => res.json("Post added!"))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/').post((req, res)=>{
    const id  = req.body.target
    //how the fuck do I implement this
    Post.findOneAndUpdate({_id: id}, {$inc: {upvotes: 1}})
    .then(() => res.json("Upvoted!"))
    .catch(error => res.status(400).json('Error: ' + error));
});
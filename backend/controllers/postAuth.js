const Post = require("../models/post.model");

const postAuth = {
    addPost: async (req, res)=>{
        try {
            const {username, userID, content} = req.body;

            const date = new Date();

            const dateFormated = date.getUTCDate() + '/' + (date.getUTCMonth() + 1) + '/' + date.getUTCFullYear();

            const newPost = new Post({
                username,
                userID,
                content,
                upvotes: 0,
                downvotes: 0,
                date: dateFormated
            })

            await newPost.save();
            
            res.json({
                message: "posted successfully",
                newPost
            })

        } catch (error) {
            res.status(500).json("error: " + error);
        }
    },
}

module.exports = postAuth;
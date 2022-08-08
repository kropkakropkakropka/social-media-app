const Profile = require("../models/profile.model");
const bcrypt = require("bcrypt")
const webtoken = require("jsonwebtoken")

const profileAuth = {
    register: async (req, res)=>{
        try {
            const {firstname, lastname, username, password} = req.body;
            //const newUsername = username.toLowerCase().replace(/ /g, ''); //transfer the input to lowercase
            const checkUsername = await Profile.findOne({username: username}); //checks if username exists
            const testhasla = "test12345";
            //if it does throw an error
            if(checkUsername){
                res.status(400).json({err: 'Username is alredy taken'})
            }
            //checks if password isnt too short
            if(testhasla.length < 8){
                res.status(400).json({err: 'Password must be at least 8 characters'})
            }

            //hash password
            const hashPassword = bcrypt.hashSync(testhasla, 12);

            const newProfile = new Profile({
                firstname, 
                lastname, 
                username, 
                password: hashPassword
            })

            const accessToken = createAccessToken({id: newProfile._id});
            const refreshToken = createRefreshToken({id: newProfile._id});

            res.cookie('refreshtoken', refreshToken,{
                httpOnly,
                path:"api/refresh_token",
                maxAge: 24*30*60*60*1000
            });

        } catch (error) {
            res.status(500).json("error: " + error);
        }
    },
    login: async (req, res)=>{
        try {
            const {username, password} = req.body;

            const checkUsername = await Profile.findOne({username: username});
            if(checkUsername){
                if(checkUsername.password == password){
                    res.json("User exists")
                }
            }
        } catch (error) {
            res.status(500).json("error: " + error);
        }
    },
    logout: async (req, res)=>{
        try {
            
        } catch (error) {
            res.status(500).json("error: " + error);
        }
    },
    generateToken: async (req, res)=>{
        try {
            
        } catch (error) {
            res.status(500).json("error: " + error);
        }
    },
}

const createAccessToken = (payload) =>{
    return webtoken.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn:"1d"})
}

const createRefreshToken = (payload) =>{
    return webtoken.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn:"30d"})
}

module.exports = profileAuth;
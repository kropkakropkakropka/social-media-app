const Profile = require("../models/profile.model");
const bcrypt = require("bcrypt")
const webtoken = require("jsonwebtoken")

const profileAuth = {
    register: async (req, res)=>{
        try {
            const {firstname, lastname, username, password} = req.body;
            const checkUsername = await Profile.findOne({username: username}); //checks if username exists
            if(checkUsername){
                res.status(400).json({err: 'Username is alredy taken'})
            }
            //checks if password isnt too short
            if(password.length < 8){
                res.status(400).json({err: 'Password must be at least 8 characters'})
            }

            //hash password
            const hashPassword = bcrypt.hashSync(password, 12);

            const newProfile = new Profile({
                firstname, 
                lastname, 
                username, 
                password: hashPassword
            })

            const accessToken = createAccessToken({id: newProfile._id});
            const refreshToken = createRefreshToken({id: newProfile._id});

            res.cookie('refreshtoken', refreshToken,{
                httpOnly: true,
                path:"api/refresh_token",
                maxAge: 24*30*60*60*1000
            });

            await newProfile.save();

            res.json({
                message: "registered successfully",
                accessToken,
                profile:{
                    ...newProfile._doc
                }
            })

        } catch (error) {
            res.status(500).json("error: " + error);
        }
    },
    login: async (req, res)=>{
        try {
            const {username, password} = req.body;

            const checkUsername = await Profile.findOne({username: username});

            if(!checkUsername) return res.status(400).json({message: 'User doesnt exist'});

            const comparePassword = await bcrypt.compare(password, checkUsername.password);

            if(!comparePassword) return res.status(400).json({message: 'Wrong password'});

            const accessToken = createAccessToken({id: checkUsername._id});
            const refreshToken = createRefreshToken({id: checkUsername._id});

            res.cookie('refreshtoken', refreshToken,{
                httpOnly: true,
                path: "/api/refresh_token",
                maxAge: 24*30*60*60*1000
            });

            res.json({
                message: "logined successfully",
                accessToken,
                profile:{
                    ...checkUsername._doc
                }
            })

        } catch (error) {
            res.status(500).json("error: " + error);
        }
    },
    logout: async (req, res)=>{
        try {
            res.clearCookie('refreshtoken', {path: "/api/refresh_token"});
            res.json({message: "Logged out"});
        } catch (error) {
            res.status(500).json("error: " + error);
        }
    },
    generateToken: async (req, res)=>{
        try {
            // const refreshToken = res.cookies.refreshtoken;
            // if(!refreshToken) return res.status(400).json({message: "You Need to Login"});
            // webtoken.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async(error, res)=>{
            //     if(error) return res.status(400).json({message: "aha"})

            //     const profile = await Profile.findById(result.id);
            // })
        } catch (error) {
            res.status(500).json("error: " + error);
        }
    },
}

const createAccessToken = (payload) =>{
    return webtoken.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn:"1d"}) //returns a web token as string
}

const createRefreshToken = (payload) =>{
    return webtoken.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn:"30d"})
}

module.exports = profileAuth;
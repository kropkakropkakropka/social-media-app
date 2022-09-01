const webtoken = require("jsonwebtoken")
const Profile = require("../models/profile.model");

const protect = async (req, res, next) =>{
    let token;
    const authHeader = req.headers.authorization;

    if(authHeader && authHeader.startsWith('Bearer')){
        try {
            token = authHeader.split(' ')[1]; //extract token string from authheader

            const decoded = webtoken.verify(token, process.env.ACCESS_TOKEN_SECRET); //verified token returns profile id

            req.profile = await Profile.findById(decoded.id).select('-password');

            next() //runs next callback function 
        } catch (error) {
            res.status(401).json("error: Not authorized, invalid token");
        }
    }

    if(!token){
        res.status(401).json("error: Not authorized, no token found");
    }
}

module.exports = protect
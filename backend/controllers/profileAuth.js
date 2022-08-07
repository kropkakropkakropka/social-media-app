const Profile = require("../models/profile.model");
const bcrypt = require("bcrypt")
const webtoken = require("jsonwebtoken")

const profileAuth = {
    register: async (req, res)=>{
        try {
            const {firstname, lastname, username, password} = req.body;
            console.log(req.body);
        } catch (error) {
            res.status(500).json("error: " + error);
        }
    },
    login: async (req, res)=>{
        try {
            
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

module.exports = profileAuth;
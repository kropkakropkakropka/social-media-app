const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("Siema stary, ale baza");
})

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//const profileRouter = require('./routes/profiles');
//const postRouter = require('./routes/posts');
const auth = require("./routes/auth")

app.use('/', auth);
// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
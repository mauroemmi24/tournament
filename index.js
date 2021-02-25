require('dotenv').config();
const express = require('express');
const path = require('path');
const Team = require('./models/Team');

//Initializations
const app = express();

const mongoose = require('mongoose');


mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

//Settings
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Routes
app.use('/', require('./routes/teams'));

//Static Files
app.use(express.static(path.join(__dirname,'/views')));







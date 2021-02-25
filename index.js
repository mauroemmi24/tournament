require('dotenv').config();
const express = require('express');
const path = require('path');
const Team = require('./models/Team');

//Initializations
const app = express();

require('./database');


app.listen(process.env.PORT || 3000)

//Settings
app.use(express.urlencoded({extended: false}));
app.use(express.json());




//Routes
app.use('/', require('./routes/teams'));

//Static Files
app.use(express.static(path.join(__dirname,'/views')));







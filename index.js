require('dotenv').config();
const express = require('express');
const path = require('path');
const Team = require('./models/Team');

//Initializations
const app = express();
require ('./database');


//Settings
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Routes
app.use('/', require('./routes/teams'));

//Static Files
app.use(express.static(path.join(__dirname,'/views')));


//Start the server
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port,host, () => {
     console.log('El servidor esta funcionando');
});



/*app.listen(app.get('port'), () => {
     console.log('Server on port',app.get('port'));
})*/


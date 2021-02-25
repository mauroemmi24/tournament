const path = require('path');
const express = require('express');
const { Router } = require('express');
const router = express();
const Team = require('../models/Team');

const ex = express();

router.set('views',path.join(__dirname,'../views'))
router.set('view engine','hbs')

router.get('/', async (req, res) => { 
    const teams = await Team.find().sort({'pts': -1 });
    res.render('index', {Team: teams});
})

module.exports = router;

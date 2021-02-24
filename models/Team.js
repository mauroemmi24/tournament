const {Schema, model} = require('mongoose');

const TeamSchema = new Schema({
    name: {type: String, required:true},
    pts: {type: Number},
    pj: {type: Number},
    pg: {type: Number},
    pe: {type: Number},
    pp: {type: Number},
    gf: {type: Number},
    gc: {type: Number},
    dif: {type: Number}
})

module.exports = model('Team',TeamSchema);
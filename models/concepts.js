const mongoose = require('mongoose');

const conceptSchema = mongoose.Schema({
    title:{type: String, required:true},
    necessity:{type: Number, default:0},
    dependentConcepts:{type: [String], default:[]},
    relatedNotes:{type: [String], default:[]},
    lastRecalled:{type: String, default: new Date().toDateString()},
    level:{type:Number, default:0},
    completed:{type:Boolean, default:false},
    tag:{type:String, default:false},
    details: {type: String, required:false}


})

module.exports = mongoose.model('Concept', conceptSchema);  
const mongoose = require('mongoose');

const conceptSchema = mongoose.Schema({
    title:{type: String, required:true},
    resource:{type: String, required:true},
    difficulty:{type: Number, default:0},
    dependentConcepts:{type: [String], default:[]},
    relatedNotes:{type: [String], default:[]},
    lastRecalled:{type: String, default: new Date().toDateString()},
    status:{type:Number, default:0},
    completed:{type:Boolean, default:false},


})

module.exports = mongoose.model('Concept', conceptSchema);
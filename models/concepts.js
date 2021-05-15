const mongoose = require('mongoose');

const conceptSchema = mongoose.Schema({
    title:{type: String, required:true},
    necessity:{type: Number, default:0},
    relatedNotes:{type: [String], default:[]},
    lastRecalled:{type: String, default: new Date().toDateString()},
    level:{type:Number, default:0},
    tag:{type:String, default:false},
    creator:{type: mongoose.Schema.Types.ObjectId, ref: "User", required:true}

})

module.exports = mongoose.model('Concept', conceptSchema);  
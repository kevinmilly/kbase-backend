const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title:{type: String, required:true},
    content:{type: String, required:true},
    source:{type: String, default:''},
    type:{type: String, required:true}, //random, fundamental, question, 
    relatedConcept: {type: String, required:true},
    creator:{type: mongoose.Schema.Types.ObjectId, ref: "User", required:true}
})

module.exports = mongoose.model('Notes', noteSchema);
const mongoose = require('mongoose');

const resourcetSchema = mongoose.Schema({
    title:{type: String, required:true},
    level:{type: Number, default:0},
    concept:{type: String, required:true},
    link: {type: String, required:true},
    creator:{type: mongoose.Schema.Types.ObjectId, ref: "User", required:true}
    


})

module.exports = mongoose.model('Resource', resourcetSchema);  
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title:{type: String, required:true},
    difficulty:{type: Number, default:0},
    lastRecalled:{type: String, default: new Date().toDateString()},
    status:{type:Number, default:0},
    completed:{type:Boolean, default:false},
    tag:{type:String, default:false},
})

module.exports = mongoose.model('task', taskSchema);
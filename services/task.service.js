const Task = require('../models/Tasks');

exports.addTask = (req,res,next) => {
    const task = new Task({
      title:req.body.title,
      resource:req.body.resource,
      difficulty: req.body.difficulty,
      status: req.body.status
    })
    task.save();
    res.status(201).json({
        message: 'Task added successfully!'
    });
}

exports.getTasks =  (req,res,next)=> {
    Task.find()
    .then((documents) => {
        console.log(documents);

        res.status(200).json({
            message:"Task has been fetched",
            tasks:documents
        });
    })
}


exports.editTask = (req,res,next) => {
    const task = new Task({
        _id: req.body.id,
        title:req.body.title,
        resource:req.body.resource,
        difficulty: req.body.difficulty,
        status: req.body.status,
        dependentTasks: req.body.dependentTasks,
        relatedNotes: req.body.relatedNotes,
        completed: req.body.completed,

      })
       Task.update({_id: Task.id}, Task, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
}



exports.deleteTask = (req, res, next) => {
    console.log(req.params.id);
    res.status(200).json({message: "Post deleted!"});
}
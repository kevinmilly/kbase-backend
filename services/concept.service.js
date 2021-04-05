const Concept = require('../models/concepts');

exports.addConcept = (req,res,next) => {
    const concept = new Concept({
      title:req.body.title,
      resource:req.body.resource,
      difficulty: req.body.difficulty,
      status: req.body.status,
      notes: req.body.notes
    })
    concept.save();
    res.status(201).json({
        message: 'Concept added successfully!'
    });
}

exports.getConcepts =  (req,res,next)=> {
    Concept.find()
    .then((documents) => {
        // console.log(documents);

        res.status(200).json({
            message:"Concept has been fetched",
            concepts:documents
        });
    })
}


exports.editConcept = (req,res,next) => {
    const concept = new Concept({
        _id: req.body.id,
        title:req.body.title,
        difficulty: req.body.difficulty,
        status: req.body.status,
        notes: req.body.notes,
        dependentConcepts: req.body.dependentConcepts,
        relatedNotes: req.body.relatedNotes,
        completed: req.body.completed,

      })
       Concept.updateOne({_id: concept.id}, concept, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
}



exports.deleteConcept = (req, res, next) => {
    console.log(req.params.id);
    res.status(200).json({message: "Post deleted!"});
}
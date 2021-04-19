const Concept = require('../models/concepts');

exports.addConcept = (req,res,next) => {
    const concept = new Concept({
      title:req.body.title,
      necessity: req.body.necessity, 
      level: req.body.level,
      tag: req.body.tag
    })
    console.dir(concept);
    concept.save();
    res.status(201).json(concept);
}

exports.getConcepts =  (req,res,next)=> {
    Concept.find()
    .then((documents) => {
        console.log(documents);

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
        necessity: req.body.necessity,
        level: req.body.level,
        notes: req.body.notes,
        dependentConcepts: req.body.dependentConcepts,
        relatedNotes: req.body.relatedNotes,
        completed: req.body.completed,
        tag: req.body.tag

      })
       Concept.updateOne({_id: concept.id}, concept, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
}



exports.deleteConcept = (req, res, next) => {
    console.log("in delete");
    // console.dir(req);
    Concept.deleteOne({id:req.body.id}, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
      });
    res.status(200).json({message: "Post deleted!"});
}
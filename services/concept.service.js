const Concept = require('../models/concepts');

exports.addConcept = (req,res,next) => {
    const concept = new Concept({
      title:req.body.title,
      necessity: req.body.necessity, 
      level: req.body.level,
      tag: req.body.tag
    })
    concept.save();
    res.status(201).json(concept);
}
 
exports.getConcepts =  (req,res,next)=> {
    Concept.find()
    .then((documents) => {
        res.status(200).json({
            message:"Concept has been fetched",
            concepts:documents
        });
    })
}


exports.editConcept = (req,res,next) => {
    console.dir(req.body);
    const concept = new Concept({
        _id: req.body._id,
        title:req.body.title,
        necessity: req.body.necessity,
        level: req.body.level,
        tag: req.body.tag

      })
       Concept.updateOne({_id: concept.id}, concept, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return  (
            res.status(200).json({
            message:"Concept udpated",
            concept
        }));
    });
}



exports.deleteConcept = (req, res, next) => {
    Concept.deleteOne({id:req.body.id}, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
      });
    res.status(200).json({message: "Post deleted!"});
}
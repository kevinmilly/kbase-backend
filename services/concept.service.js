const Concept = require('../models/concepts');

exports.addConcept = (req,res,next) => {
    const concept = new Concept({
      title:req.body.title,
      necessity: req.body.necessity, 
      level: req.body.level,
      tag: req.body.tag,
      creator: req.userData.userId
    })
    concept.save();
    res.status(201).json(concept);
}
 
exports.getConcepts =  (req,res,next)=> {
    Concept.find({creator: req.userData.userId})
    .then((documents) => {
        res.status(200).json({
            message:"Concept has been fetched",
            concepts:documents
        });
    })
}


exports.editConcept = (req,res,next) => {

    const concept = new Concept({
        _id: req.body._id,
        title:req.body.title,
        necessity: req.body.necessity,
        level: req.body.level,
        tag: req.body.tag

      })
       Concept.updateOne({_id: concept.id, creator: req.userData.userId}, concept).then(
        result => {
            if(result.nModified > 0) {
                return  (
                    res.status(200).json({
                    message:"Concept updated",
                    concept
                }));
            } else {
                return  (
                    res.status(401).json({
                    message:"Not Authorized!",
                }));
            }
        });
}



exports.deleteConcept = (req, res, next) => {
    Concept.deleteOne({id:req.body.id, creator: req.userData.userId}).then(
        result => {
            if(result.n > 0) {
                return  (
                    res.status(200).json({
                    message:"Concept deleted",
                    concept
                }));
            } else {
                return  (
                    res.status(401).json({
                    message:"Not Authorized!",
                }));
            }
        });
    }

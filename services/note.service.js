const Note = require('../models/note');


exports.addNote = (req,res,next) => {
    const note = new Note({
      title:req.body.title,
      content:req.body.content,
      source: req.body.source,
      type: req.body.type,
      relatedConcept: req.body.relatedConcept,
      creator: req.userData.userId
    })
    note.save();
    res.status(201).json({
        message: 'Note added successfully!'
    });
} 

exports.getNotesByConcept =  (req,res,next)=> {
    Note.find({"relatedConcept" : req.params.relatedConcept})
    .then((documents) => {

        res.status(200).json({
            message:"Note have been fetched",
            notes:documents
        });
    })
}


exports.editNote = (req,res,next) => {
    const note = new Note({
        _id: req.body.id,
        title:req.body.title,
        content:req.body.content,
        source: req.body.source,
        type: req.body.type
      })
      Note.updateOne({_id: Note.id, creator: req.userData.userId}, Note, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
}



exports.deleteNote = (req, res, next) => {

    Concept.deleteOne({id:req.body.id}, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
      });
    res.status(200).json({message: "Note deleted!"});
}
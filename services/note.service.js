const Note = require('../models/note');


exports.addNote = (req,res,next) => {
    const note = new Note({
      title:req.body.title,
      content:req.body.content,
      source: req.body.source,
      type: req.body.type 
    })
    note.save();
    res.status(201).json({
        message: 'Note added successfully!'
    });
}

exports.getNotesByConcept =  (req,res,next)=> {
    Note.find({"relatedConcept" : req.body.relatedConcept})
    .then((documents) => {
        console.log(documents);

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
        type: req.body.type,

      })
      Note.update({_id: Note.id}, Note, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
}



exports.deleteNote = (req, res, next) => {
    console.log(req.params.id);
    res.status(200).json({message: "Note deleted!"});
}
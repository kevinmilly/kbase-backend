const Resource = require('../models/resource');


exports.addResource = (req,res,next) => {
    const resource = new Resource({
      title:req.body.title, 
      link:req.body.link,
      level:req.body.level,
      concept: req.body.concept,
      type: req.body.type 
    })
    resource.save();
    res.status(201).json({
        message: 'Resource added successfully!'
    });
}

exports.getResourcesByConcept =  (req,res,next)=> {
    Resource.find({"relatedConcept" : req.params.relatedConcept})
    .then((documents) => {
        console.log(documents);

        res.status(200).json({
            message:"Resource have been fetched",
            resources:documents
        });
    })
    .catch(e => console.dir(e));
}


exports.editResource = (req,res,next) => {
    const resource = new Resource({
        _id: req.body.id,
        title:req.body.title,
        link:req.body.link,
        level:req.body.level,
        concept: req.body.concept,
        type: req.body.type,

      })
      Resource.update({_id: Resource.id}, Resource, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
}



exports.deleteResource = (req, res, next) => {
    console.log(req.params.id);
    res.status(200).json({message: "Resource deleted!"});
}
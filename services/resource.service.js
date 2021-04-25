const Resource = require('../models/resource');


exports.addResources = (req,res,next) => {
    console.dir(req.body);
    req.body.forEach(element => {
          resource.save(
            new Resource({
                title:element.title, 
                link:element.link,
                level:element.level,
                concept: element.concept,
                type: element.type 
              })
          );
    });
    res.status(201).json({
        message: 'Resource added successfully!'
    });
}
 
exports.getResourcesByConcept =  (req,res,next)=> {
    Resource.find({"concept" : req.params.relatedConcept})
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
      Resource.updateOne({_id: Resource.id}, Resource, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
} 



exports.deleteResources = (req, res, next) => {
    console.dir(req.params);
    req.params.forEach( resourceId => {
        Resource.deleteOne({id:resourceId}, function (err) {
            if(err) console.log(err);
            console.log("Successful deletion");
          });
    } )
    res.status(200).json({message: "Resources deleted!"});
}
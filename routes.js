const checkAuth = require("./middleware/check-auth");


module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests

    const concept = require("./services/concept.service");
    const note = require("./services/note.service");
    const resources = require("./services/resource.service");
    const search = require("./services/g-search.service");

    //Concepts
    app.post("/api/concepts", checkAuth, concept.addConcept);
    
    
    app.get('/api/concepts', checkAuth, concept.getConcepts);
     
    app.delete("/api/concepts/:id", checkAuth, concept.deleteConcept);

    app.put("/api/concepts/:id", checkAuth, concept.editConcept);


    //notes
    app.post("/api/notes", checkAuth, note.addNote);
    
    
    app.get('/api/notes/:relatedConcept', checkAuth, note.getNotesByConcept); 
    
    
    app.delete("/api/notes/:id", checkAuth, note.deleteNote);

    app.put("/api/notes/:id", checkAuth, note.editNote);

    //learning

    app.get("/api/g-search/:term", checkAuth, search.getResults);

    //resources
    app.post("/api/resources", checkAuth, resources.addResources);


    app.get('/api/resources/:relatedConcept', checkAuth, resources.getResourcesByConcept);
    
    
    app.delete("/api/resources/", checkAuth, resources.deleteResources);

    app.put("/api/resources/", checkAuth, resources.editResource);

 

}
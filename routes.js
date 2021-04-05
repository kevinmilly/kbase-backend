
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
    app.post("/api/concepts", concept.addConcept);
    
    
    app.get('/api/concepts', concept.getConcepts);
    
    
    app.delete("/api/concepts/:id", concept.deleteConcept);

    app.put("/api/concepts/:id", concept.editConcept);


    //notes
    app.post("/api/notes", note.addNote);
    
    
    app.get('/api/notes/:relatedConcept', note.getNotesByConcept);
    
    
    app.delete("/api/notes/:id", note.deleteNote);

    app.put("/api/notes/:id", note.editNote);

    //learning

    app.get("/api/g-search/:term", search.getResults);

    //resources
    app.post("/api/resources", resources.addResource);


    app.get('/api/resources/:relatedConcept', resources.getResourcesByConcept);
    
    
    app.delete("/api/resources/:id", resources.deleteResource);

    app.put("/api/resources/:id", resources.editResource);

}
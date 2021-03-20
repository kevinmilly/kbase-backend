
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests

    const concept = require("./services/concept.service");
    const task = require("./services/task.service");

    //Concepts
    app.post("/api/concepts", concept.addConcept);
    
    
    app.get('/api/concepts', concept.getConcepts);
    
    
    app.delete("/api/concepts/:id", concept.deleteConcept);

    app.put("/api/concepts/:id", concept.editConcept);


    //Tasks
    app.post("/api/tasks", task.addTask);
    
    
    app.get('/api/tasks', task.getTasks);
    
    
    app.delete("/api/tasks/:id", task.deleteTask);

    app.put("/api/tasks/:id", task.editTask);

}
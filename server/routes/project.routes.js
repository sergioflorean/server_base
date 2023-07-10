const { authenticate } = require("../config/jwt.config");
const {findAllProjects, createProject} = require("../controller/project.controller");

module.exports = app => {
    app.get("/api/projects", authenticate, findAllProjects);
    app.post("/api/projects/new", createProject);
}
// Compare this snippet from server/models/project.model.js:



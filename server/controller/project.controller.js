const Project = require('../models/project.model');

module.exports.findAllProjects = async (req, res) => {
    try {
        const projectList = await Project.find();
        res.json({ projects: projectList });


    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });

    }
}

module.exports.createProject = async (req, res) => {
    try {
        const newProject = await Project.create(req.body);
        res.json({ project: newProject });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
}
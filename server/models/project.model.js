const {Schema, model} = require('mongoose');

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be at least 2 characters long"]
    },
    status: {
        type: String,
        required: [true, "Status is required"],
        minlength: [2, "Status must be at least 2 characters long"]
    },

}, {timestamps: true});

const Project = model("Project", ProjectSchema);
module.exports = Project;
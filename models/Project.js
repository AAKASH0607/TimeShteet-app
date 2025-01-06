const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    clientName: { type: String, required: true },
    address: { type: String },
    department: { type: String, required: true },
    businessUnit: { type: String, required: true },
    projectType: { type: String, required: true },
});

module.exports = mongoose.model('Project', ProjectSchema);

const express = require('express');
const { getAllProjects, addProject, deleteProject } = require('../controllers/projectController');
const router = express.Router();

router.get('/', getAllProjects);
router.post('/', addProject);
router.delete('/:id', deleteProject);

module.exports = router;

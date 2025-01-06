const express = require('express');
const { getTimelogsByUser, addTimelog, deleteTimelog } = require('../controllers/timelogController');
const router = express.Router();

router.get('/:userId', getTimelogsByUser);
router.post('/', addTimelog);
router.delete('/:id', deleteTimelog);

module.exports = router;

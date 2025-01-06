const express = require('express');
const { getAllUsers, addUser, deleteUser } = require('../controllers/userController');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const router = express.Router();

router.get('/', getAllUsers);
router.post('/', addUser);
router.delete('/:id', deleteUser);
router.get('/me', getUserProfile); // Get current user profile
router.put('/me', updateUserProfile); // Update user profile

module.exports = router;

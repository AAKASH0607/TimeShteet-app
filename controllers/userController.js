const User = require('../models/User');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new user
exports.addUser = async (req, res) => {
    const { username, email, password, department, businessUnit } = req.body;
    try {
        const newUser = new User({ username, email, password, department, businessUnit });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getUserProfile = async (req, res) => {
    const userId = req.user.id;
    const user = await User.findById(userId).select('-password'); // Exclude password
    res.json(user);
};

exports.updateUserProfile = async (req, res) => {
    const userId = req.user.id;
    const { username, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, { username, email }, { new: true });
    res.json(updatedUser);
};

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

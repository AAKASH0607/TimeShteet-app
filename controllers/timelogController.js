const Timelog = require('../models/Timelog');

// Get all timelogs for a user
exports.getTimelogsByUser = async (req, res) => {
    try {
        const timelogs = await Timelog.find({ userId: req.params.userId });
        res.json(timelogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new timelog
exports.addTimelog = async (req, res) => {
    const { date, projectName, task, hours, status, userId } = req.body;
    try {
        const newTimelog = new Timelog({ date, projectName, task, hours, status, userId });
        await newTimelog.save();
        res.status(201).json(newTimelog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a timelog
exports.deleteTimelog = async (req, res) => {
    try {
        const timelog = await Timelog.findByIdAndDelete(req.params.id);
        if (!timelog) return res.status(404).json({ message: 'Timelog not found' });
        res.json({ message: 'Timelog deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

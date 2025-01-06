const mongoose = require('mongoose');

const TimelogSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    projectName: { type: String, required: true },
    task: { type: String, required: true },
    hours: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Completed'], required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Timelog', TimelogSchema);

import React, { useState } from 'react';

const TimeEntryForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        projectName: '',
        task: '',
        hours: '',
        status: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Time entry submitted:', formData);
        // Add logic to submit form data to the backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Log Time</h2>
            <input type="date" name="date" onChange={handleChange} required />
            <input type="text" name="projectName" placeholder="Project Name" onChange={handleChange} required />
            <input type="text" name="task" placeholder="Task" onChange={handleChange} required />
            <input type="number" name="hours" placeholder="Hours Spent" onChange={handleChange} required />
            <select name="status" onChange={handleChange} required>
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TimeEntryForm;

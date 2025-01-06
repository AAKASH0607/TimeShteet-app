import React, { useState } from 'react';
import axios from 'axios';

const TimeLog = () => {
    const [log, setLog] = useState({ date: '', projectName: '', task: '', hours: 0 });

    const handleTimeLog = async () => {
        try {
            await axios.post(
                'http://localhost:5000/api/timelogs',
                log,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            alert('Time logged successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to log time');
        }
    };

    return (
        <div>
            <h2>Log Time</h2>
            <input type="date" onChange={(e) => setLog({ ...log, date: e.target.value })} />
            <input
                type="text"
                placeholder="Project Name"
                onChange={(e) => setLog({ ...log, projectName: e.target.value })}
            />
            <input
                type="text"
                placeholder="Task"
                onChange={(e) => setLog({ ...log, task: e.target.value })}
            />
            <input
                type="number"
                placeholder="Hours"
                onChange={(e) => setLog({ ...log, hours: parseInt(e.target.value, 10) })}
            />
            <button onClick={handleTimeLog}>Log Time</button>
        </div>
    );
};

export default TimeLog;

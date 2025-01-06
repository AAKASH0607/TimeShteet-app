import React, { useState } from 'react';
import axios from 'axios';

const ProjectEntry = () => {
    const [project, setProject] = useState({ name: '', clientName: '', department: '', businessUnit: '' });

    const handleAddProject = async () => {
        try {
            await axios.post(
                'http://localhost:5000/api/projects',
                project,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            alert('Project added successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to add project');
        }
    };

    return (
        <div>
            <h2>Add New Project</h2>
            <input
                type="text"
                placeholder="Project Name"
                onChange={(e) => setProject({ ...project, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Client Name"
                onChange={(e) => setProject({ ...project, clientName: e.target.value })}
            />
            <input
                type="text"
                placeholder="Department"
                onChange={(e) => setProject({ ...project, department: e.target.value })}
            />
            <input
                type="text"
                placeholder="Business Unit"
                onChange={(e) => setProject({ ...project, businessUnit: e.target.value })}
            />
            <button onClick={handleAddProject}>Add Project</button>
        </div>
    );
};

export default ProjectEntry;

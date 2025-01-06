import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', background: '#f0f0f0' }}>
            <Link to="/dashboard" style={{ margin: '0 15px' }}>Dashboard</Link>
            <Link to="/projects" style={{ margin: '0 15px' }}>Project Entry</Link>
            <Link to="/timelog" style={{ margin: '0 15px' }}>Time Logging</Link>
            <Link to="/profile" style={{ margin: '0 15px' }}>User Profile</Link>
        </nav>
    );
};

export default Navbar;

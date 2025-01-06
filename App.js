import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TimeEntryForm from './components/TimeEntryForm';
import './App.css'; // Add any global styles if necessary
import UserProfile from './components/UserProfile';
import ProjectEntry from './components/ProjectEntry';
import TimeLog from './components/TimeLog';
import Navbar from './components/Navbar';

// Add routes
<Routes>
    <Route path="/profile" element={<UserProfile />} />
    <Route path="/projects" element={<ProjectEntry />} />
    <Route path="/timelog" element={<TimeLog />} />
</Routes>

const App = () => {
  // Simulate authentication status (replace with real logic)
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/time-entry" element={<TimeEntryForm />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
            <Route path="/profile" element={<UserProfile />} />
              <Route path="/projects" element={<ProjectEntry />} />
              <Route path="/timelog" element={<TimeLog />} />

          {/* Private Routes (require authentication) */}
          {isAuthenticated ? (
            <>
              
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
        
      </div>
    </Router>
    
  );
};


export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [user, setUser] = useState({ username: '', email: '' });

    // Fetch user details
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get('http://localhost:5000/api/users/me', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setUser(response.data);
        };
        fetchUser();
    }, []);

    const handleUpdate = async () => {
        try {
            await axios.put(
                'http://localhost:5000/api/users/me',
                user,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            alert('Profile updated successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to update profile');
        }
    };

    return (
        <div>
            <h2>User Profile</h2>
            <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Username"
            />
            <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
            />
            <button onClick={handleUpdate}>Update Profile</button>
        </div>
    );
};

export default UserProfile;

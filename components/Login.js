import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Registration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); // For Registration
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            alert('Login successful');
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
            alert('Registration successful. Please log in.');
            setIsLogin(true); // Switch to Login form after successful registration
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            {!isLogin && (
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            )}
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={isLogin ? handleLogin : handleRegister}>
                {isLogin ? 'Login' : 'Register'}
            </button>
            <p>
                {isLogin ? (
                    <>
                        Don't have an account?{' '}
                        <button onClick={() => setIsLogin(false)}>Register</button>
                    </>
                ) : (
                    <>
                        Already have an account?{' '}
                        <button onClick={() => setIsLogin(true)}>Login</button>
                    </>
                )}
            </p>
        </div>
    );
};

export default Login;

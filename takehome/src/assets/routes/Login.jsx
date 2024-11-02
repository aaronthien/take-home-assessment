import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmitUser = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: userName,
                    password: password
                })
            });

            if (!response.ok) {
                console.log("Account not found");
                setUserName('');
                setPassword('');
            } else {
                const data = await response.json();
                localStorage.setItem('authToken', data.token);
                navigate('/dashboard'); 
            }
        } catch (err) {
            console.log(err);
        }
    };

    const navToReg = () => {
        navigate('/register');
    };

    return (
        <>
        <h1>Login</h1>
            <form onSubmit={handleSubmitUser}>
                <div>
                    <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
                </div>
                <div>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button type="submit">Log in</button>
            </form>
            <button type="button" onClick={navToReg}>Register here</button>
        </>
    );
};

export default Login;

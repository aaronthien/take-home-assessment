import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';


const Login = () => {
    const [ userName, setUserName] = useState('');
    const [ password, setPassword] = useState('');
    const navigate = useNavigate();

    const goLogin = () => {
      navigate('/login')
    }
    
    const handleSubmitUser = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch('http://localhost:3001/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: userName,
              password: password
            })
          });
      
          if (!response.ok) {
            console.log('Error registering account')
          } else {
            console.log("Account created")
            setUserName('');
            setPassword('');
            navigate('/login')
          }
        } catch (err) {
          console.log('Error:', err);
        }
      }
    


  return (
    <>
      <div className="register-label">Register</div>
        <form onSubmit={handleSubmitUser}>
            <div>
                <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)}>
                </input>
            </div>
            <div>
                <input type='text' value={password} onChange={(e)=> {setPassword(e.target.value)}}>
                </input>
            </div>
            <button type="submit">Create Account</button>
            <button type="button" className="back-to-login" onClick={goLogin}>
                Back to Login
            </button>
        </form>
    </>
  )
}

export default Login
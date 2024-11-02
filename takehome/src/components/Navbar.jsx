import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login')
  }

  const goRegister = () => {
    navigate('/register')
  }

  return (
    <div>
      <button onClick={ goLogin }>Login</button>
      <button onClick={ goRegister }>Register</button>
    </div>
  );
};

export default Navbar;

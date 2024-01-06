import React, { useState, useRef,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginform.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  useEffect(() => {
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);
  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password');
      if (!username) {
        usernameInputRef.current.focus();
      } else {
        passwordInputRef.current.focus();
      }
      return;
    }
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = storedUsers.find(u => u.username === username && u.password === password);
    if (user) {
      setError('');
      localStorage.setItem('loggedInUsername', username);
      localStorage.setItem('loggedInPassword', password);
      navigate('/home');
    } else {
      setError('Invalid credentials. Please register or try again.');
    }
  };

  const handleForgotPassword = () => {
    alert('An email has been sent to your registered email ID.');
  };

  return (
    <div className="login-container">
      <center>
        <h2>LOGIN </h2>
      </center>
      <div className={`input-group ${error && !username ? 'highlight' : ''}`}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameInputRef} 
        />
      </div>
      <div className={`input-group ${error && !password ? 'highlight' : ''}`}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordInputRef}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <p className='divq'>
        <div className='fp' onClick={handleForgotPassword}>
          Forgot Password?
        </div>
      </p>
      <center>
        <button className='log1' onClick={handleLogin}>Login</button>
      </center>

      <center>
        <p className='dive'>
          Join as a member <Link to="/signup" className='si'>Join</Link>
        </p>
      </center>
    </div>
  );
};

export default LoginForm;
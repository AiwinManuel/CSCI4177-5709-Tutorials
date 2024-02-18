import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css'; // Make sure this import is correct

const LoginPage = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: '', 
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://express-t4.onrender.com/api/login', loginDetails, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data.message === "Login success!") {
        navigate('/profile-listing'); 
      } else {
        setErrorMessage(response.data.message || 'Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'An error occurred. Please try again later.');
      } else if (error.request) {
        setErrorMessage('The request was made but no response was received. Please check your network connection.');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2> 
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={loginDetails.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={loginDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [registrationDetails, setRegistrationDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Checking First Name and Last Name 
    if (!registrationDetails.firstName.match(/^[A-Za-z]+$/) || !registrationDetails.lastName.match(/^[A-Za-z]+$/)) {
      errors.name = "Name should contain only letters.";
      formIsValid = false;
    }

    // Checking Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registrationDetails.email)) {
      errors.email = "Email is not valid.";
      formIsValid = false;
    }

    // Checking Password
    if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/.test(registrationDetails.password)) {
        errors.password = "Password must be at least 8 characters and include alpha-numeric and special characters.";
        formIsValid = false;
      }

    // Checking Password Match
    if (registrationDetails.password !== registrationDetails.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      formIsValid = false;
    }
    //Returning Error
    setErrors(errors);
    return formIsValid;
  };
  const checkPasswordsMatch = () => {
    if (registrationDetails.password !== registrationDetails.confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Passwords do not match." });
    } else {
        const newErrors = { ...errors };
        delete newErrors.confirmPassword;
        setErrors(newErrors);
        setSuccessMessage('Passwords match!');
        setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
    }
  };

  const handleChange = (e) => {
    setRegistrationDetails({ ...registrationDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        navigate('/profile', { state: { ...registrationDetails } });
    }
  };

  return (
    <div style={styles.bookStyle}>
      <div style={styles.pageStyle}>
        <h2 style={{ textAlign: 'center' }}>Register</h2>
        <form onSubmit={handleSubmit} style={styles.formStyle}>
          <div style={styles.inputWrapper}>
            <label style={styles.labelStyle}>First Name:</label>
            <input type="text" name="firstName" value={registrationDetails.firstName} onChange={handleChange} style={styles.inputStyle} />
            {errors.name && <div style={styles.errorStyle}>{errors.name}</div>}
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.labelStyle}>Last Name:</label>
            <input type="text" name="lastName" value={registrationDetails.lastName} onChange={handleChange} style={styles.inputStyle} />
            {errors.name && <div style={styles.errorStyle}>{errors.name}</div>}
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.labelStyle}>Email:</label>
            <input type="email" name="email" value={registrationDetails.email} onChange={handleChange} style={styles.inputStyle} />
            {errors.email && <div style={styles.errorStyle}>{errors.email}</div>}
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.labelStyle}>Password:</label>
            <input type="password" name="password" value={registrationDetails.password} onChange={handleChange} style={styles.inputStyle} />
            {errors.password && <div style={styles.errorStyle}>{errors.password}</div>}
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.labelStyle}>Confirm Password:</label>
            <input type="password" name="confirmPassword" value={registrationDetails.confirmPassword} onChange={handleChange} style={styles.inputStyle} />
            {errors.confirmPassword && <div style={styles.errorStyle}>{errors.confirmPassword}</div>}
            {successMessage && <div style={styles.successStyle}>{successMessage}</div>}
          </div>
          <button type="button" onClick={checkPasswordsMatch} style={styles.checkButton}>Check Passwords</button>
          <button type="submit" style={styles.registerButton}>Confirm</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  bookStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5'
  },
  pageStyle: {
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  },
  checkButton: {
    width: '50%',
    padding: '10px',
    backgroundColor: '#28a745', 
    color: 'white',
    border: '1px solid',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px auto 20px', 
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%', 
  },
  inputWrapper: {
    marginBottom: '10px',
    width: '100%', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  },
  inputStyle: {
    width: '100%', 
    padding: '8px',
  },
  labelStyle: {
    marginBottom: '5px',
  },
  errorStyle: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '5px',
  },
  registerButton: {
    width: '50%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: '1px solid',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 auto',
  }
};

export default RegistrationPage;
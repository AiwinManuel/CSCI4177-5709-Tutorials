import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();
  const { firstName, lastName, email } = location.state || { firstName: ' ', lastName: ' ', email: ' ' };

  return (
    <div style={styles.container}>
      <div style={styles.profileBox}>
        <h2>Profile Page</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0'
  },
  profileBox: {
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    width: 'fit-content',
  }
};

export default ProfilePage;
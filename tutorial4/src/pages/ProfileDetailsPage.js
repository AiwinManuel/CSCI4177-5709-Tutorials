import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProfileDetailsPage.css'; 
const ProfileDetailsPage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
  }, [id]);

  if (!userDetails) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-details-container">
      <div className="profile-details-box">
        <img src={userDetails.picture} alt={userDetails.name} className="profile-picture" />
        <h2>{userDetails.name}</h2>
        <div>Email: {userDetails.email}</div>
        <div>Company: {userDetails.company}</div>
        <div className="about-section">About: {userDetails.about}</div>
      </div>
    </div>
  );
};

export default ProfileDetailsPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProfileDetailsPage.css'; 

const ProfileDetailsPage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
        setUserDetails(response.data);
        setShowToast(true);
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
  <div className="detail-box">
    <img src={userDetails.picture} alt={userDetails.name} className="profile-picture" />
    <h2>{userDetails.name}</h2>
    <div>Company: {userDetails.company}</div>
    <div className="about-section">About: {userDetails.about}</div>
  </div>

  <div className="detail-box">
    <div className="title">Contact</div>
    <div>Email: {userDetails.email}</div>
    <div>Phone: {userDetails.phone}</div>
    <div>Address: {userDetails.address}</div>
    <div>Location: {userDetails.latitude}, {userDetails.longitude}</div>
  </div>

  <div className="detail-box">
    <div className="title">Friends</div>
    <ul>
      {userDetails.friends.map(friend => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </ul>
  </div>

  <div className="detail-box">
    <div className="title">Details</div>
    <div>Age: {userDetails.age}</div>
    <div>Eye Color: {userDetails.eyeColor}</div>
    <div>Gender: {userDetails.gender}</div>
    <div>Favorite Fruit: {userDetails.favoriteFruit}</div>
  </div>
  {showToast && <div className="toast">{userDetails.greeting}</div>}
</div>
  );
};

export default ProfileDetailsPage;

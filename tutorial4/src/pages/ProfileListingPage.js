import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProfileListingPage.css'; 

const ProfileListingPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://express-t4.onrender.com/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = searchTerm
    ? users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : users;

  return (
    <div className="users-container">
      <div className="users-title">Users</div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="users-grid">
        {filteredUsers.map(user => (
          <div key={user._id} className="user-card" onClick={() => navigate(`/profile-details/${user._id}`)}>
            <img src={user.picture} alt={user.name} />
            <div>{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileListingPage;

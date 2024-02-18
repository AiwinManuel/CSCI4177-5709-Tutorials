// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfileListingPage from './pages/ProfileListingPage';
import ProfileDetailsPage from './pages/ProfileDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile-listing" element={<ProfileListingPage />} />
        <Route path="/profile-details/:id" element={<ProfileDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

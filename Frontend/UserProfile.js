// UserProfile.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile data from backend when component mounts
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/user/profile');
        setUserProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {userProfile ? (
        <div>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          {/* Display other profile details */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default UserProfile;

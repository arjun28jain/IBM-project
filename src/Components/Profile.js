
import React from 'react';
import Navigation from './Navigation';

const Profile = () => {

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-0 relative">
      
      <Navigation/>

      <div className="w-full max-w-4xl mt-20 p-6">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      </div>
    </div>
  );
};

export default Profile;

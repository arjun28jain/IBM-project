// Borrow.js
import React from 'react';
import profilelogo from './profilelogo.jpg';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const Borrow = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-0 relative">
     <Navigation/>

      <div className="w-full max-w-4xl mt-20 p-6">
        <h1 className="text-2xl font-bold mb-4">Borrowing Tips</h1>
        {/* Add relevant content for the Borrow page */}
      </div>
    </div>
  );
};

export default Borrow;

import React from 'react';
import './App.css'; 
import profilelogo from './profilelogo.jpg';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/investment-goals');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-sm w-full">
        <img
          src={profilelogo}
          className="w-36 h-36 rounded-full mb-4 shadow-md translate-x-20 object-fill" alt='no-pic'
        />
        <br/>
        <h1 className="text-4xl font-semibold text-gray-800 mb-5">WealthBuild</h1>
        <input
          type="text"
          placeholder="Username"
          required
          className="w-full p-4 mb-4 mt-2 border border-gray-300 rounded-sm text-lg h-10"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-4 mb-4 border border-gray-300 rounded-sm text-lg h-10"
        />
        <button
          type="button"
          onClick={handleLogin}
          className="w-full p-4 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

import React from 'react';
import { Link } from 'react-router-dom';
import profilelogo from './profilelogo.jpg';
import profileImage from './profileImage.jpg';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <nav className="w-full flex justify-between items-center p-4 bg-gray-800 text-white shadow-md fixed top-0 z-50">
        <div className="flex items-center">
          <img src={profilelogo} alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">WealthBuild</h1>
        </div>
        <ul className="flex space-x-6 text-lg ml-auto mr-7">
          <li>
            <Link to="/home" className="hover:text-blue-400 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/invest" className="hover:text-blue-400 cursor-pointer">
              Invest
            </Link>
          </li>
          <li>
            <Link to="/save" className="hover:text-blue-400 cursor-pointer">
              Save
            </Link>
          </li>
          <li>
            <Link to="/spend" className="hover:text-blue-400 cursor-pointer">
              Spend
            </Link>
          </li>
          <li>
            <Link to="/borrow" className="hover:text-blue-400 cursor-pointer">
              Borrow
            </Link>
          </li>
          <li>
            <Link to="/learn" className="hover:text-blue-400 cursor-pointer">
              Learn
            </Link>
          </li>
        </ul>
        <Link to="/profile">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            My Profile
          </button>
        </Link>
      </nav>

      <section className="relative w-full max-w-6xl p-6 bg-white rounded-lg shadow-md mt-32">
        <h2 className="text-3xl font-bold mb-8 text-center">Profile Information</h2>
        <br />
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">

            <img src={profileImage} alt="Profile" className="w-60 h-60 translate-x-7 rounded-full mx-auto md:mx-0 -mt-20 object-center" />

            <h3 className="text-2xl font-bold mt-4 mx-14 translate-x-7 ">Arjun Jain</h3>
            <p className="text-gray-600 mx-5 translate-x-4">arjunjain2892003@gmail.com</p>
            <p className="text-gray-600 mx-14 translate-x-10 ">700-703-42**</p>
          </div>

          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2">Personal Details</h4>
              <p className="text-gray-700">Name: Arjun Jain</p>
              <p className="text-gray-700">Email: arjunjain2892003@gmail.com</p>
              <p className="text-gray-700">Phone: 700-703-42**</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2">Preferences</h4>
              <p className="text-gray-700">Preferred Language: English</p>
              <p className="text-gray-700">Time Zone: GMT-5</p>
              <p className="text-gray-700">Currency: INR</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2">Security Settings</h4>
              <p className="text-gray-700">Two-factor Authentication: Enabled</p>
              <p className="text-gray-700">Account Recovery Options: Set</p>
            </div>
          </div>
          <img src={profilelogo} alt="Profile Logo" className="absolute bottom-0 right-0 w-26 h-26" />
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;

import React from 'react';
import { Link } from 'react-router-dom';
import profilelogo from './profilelogo.jpg';
import heroImage from './heroImage.jpg';
import './home.css';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
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


      <header className="w-full text-white flex flex-col items-center justify-center py-20 mt-16 relative">
        <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-100" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 stroke-black stroke-darker ">Revolutionizing Financial Advisory</h1>
          <p className="text-xl mb-8 text-center max-w-2xl translate-x-11">
            Empowering retail investors with personalized, data-driven financial advice using generative AI.
          </p>
          <Link to="/learn" className="px-6 py-3 mb-5 absolute bg-white text-gray-800 rounded-lg font-bold hover:bg-gray-100">
            Learn More
          </Link>
        </div>
      </header>

      <section className="w-full max-w-6xl mt-20 p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transform transition-transform duration-200 hover:bg-blue-500 hover:text-white hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Personalized Investment Recommendations</h3>
            <p>Get tailored investment advice based on your financial goals and risk tolerance.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transform transition-transform duration-200 hover:bg-blue-500 hover:text-white hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Financial Literacy Education</h3>
            <p>Learn about risk management and portfolio diversification to make informed decisions.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transform transition-transform duration-200 hover:bg-blue-500 hover:text-white hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Impact Tracking</h3>
            <p>Track the impact of your investments and see how they contribute to your financial goals.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transform transition-transform duration-200 hover:bg-blue-500 hover:text-white hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Community Forums</h3>
            <p>Engage with other investors, share insights, and collaborate on investment strategies.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transform transition-transform duration-200 hover:bg-blue-500 hover:text-white hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Admin Dashboard</h3>
            <p>Manage your profile and track your investment performance in one place.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transform transition-transform duration-200 hover:bg-blue-500 hover:text-white hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Resource Center</h3>
            <p>Access a wealth of resources and tools to enhance your financial knowledge.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-800 text-white py-9 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
          <p className="text-xl mb-8">
            Become a part of a growing community of informed investors. Get started on your financial journey with WealthBuild.
          </p>
          <Link to="/invest" className="px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100">
            Get Started
          </Link>
        </div>
      </section>

      <footer className="w-full bg-gray-800 text-white py-5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2024 WealthBuild. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

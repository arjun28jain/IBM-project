import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import profilelogo from './profilelogo.jpg';

const InvestmentGoals = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [riskTolerance, setRiskTolerance] = useState(0.5);
  const [selectedRisk, setSelectedRisk] = useState('Very conservative');

  const handleButtonClick = (duration) => {
    setSelectedButton(duration);
  };

  const handleRiskChange = (e) => {
    const value = parseFloat(e.target.value);
    setRiskTolerance(value);
    const toleranceLevels = [
      { level: 'Very conservative', max: 0.2 },
      { level: 'Conservative', max: 0.4 },
      { level: 'Moderate', max: 0.6 },
      { level: 'Aggressive', max: 0.8 },
      { level: 'Very aggressive', max: 1.0 },
    ];

    for (const level of toleranceLevels) {
      if (value <= level.max) {
        setSelectedRisk(level.level);
        break;
      }
    }
  };

  const handleRiskSelection = (tolerance) => {
    setSelectedRisk(tolerance);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-0 relative">
      <nav className="w-full flex justify-between items-center p-4 bg-white shadow-md fixed top-0 z-50">
        <div className="flex items-center">
          <img src={profilelogo} alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">WealthBuild</h1>
        </div>
        <ul className="flex space-x-6 text-lg ml-auto mr-7">
          <li>
            <Link to="/home" className="hover:text-blue-500 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/invest" className="hover:text-blue-500 cursor-pointer">
              Invest
            </Link>
          </li>
          <li>
            <Link to="/save" className="hover:text-blue-500 cursor-pointer">
              Save
            </Link>
          </li>
          <li>
            <Link to="/spend" className="hover:text-blue-500 cursor-pointer">
              Spend
            </Link>
          </li>
          <li>
            <Link to="/borrow" className="hover:text-blue-500 cursor-pointer">
              Borrow
            </Link>
          </li>
          <li>
            <Link to="/learn" className="hover:text-blue-500 cursor-pointer">
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

      <div className="w-full max-w-4xl mt-20 p-6">
        <h1 className="text-2xl font-bold mb-4">Set your investment goals</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            What is your initial investment?
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Do you want to make recurring contributions?
          </label>
          <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Investment duration
          </label>
          <div className="flex space-x-2" id="duration">
            {['Less than 1 year', '1-3 years', '4-6 years', '7-9 years', '10+ years'].map((duration) => (
              <button
                key={duration}
                onClick={() => handleButtonClick(duration)}
                className={`px-4 py-2 rounded-lg transform hover:scale-105 transition-all duration-200 ${
                  selectedButton === duration
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-blue-500 hover:text-white'
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            How comfortable are you with potential investment losses?
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={riskTolerance}
            onChange={handleRiskChange}
            className="w-full mb-5"
          />
          <div className="mt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Risk Tolerance: {selectedRisk}
            </label>
            <div className="space-y-2">
              {['Very conservative', 'Conservative', 'Moderate', 'Aggressive', 'Very aggressive'].map((tolerance) => (
                <div key={tolerance} className="flex items-center">
                  <input
                    type="radio"
                    name="risk"
                    value={tolerance}
                    checked={selectedRisk === tolerance}
                    onChange={() => handleRiskSelection(tolerance)}
                    className="mr-2"
                  />
                  <label>{tolerance}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
          </div>
          <button className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg">Next</button>
        </div>
      </div>
      <img src={profilelogo} alt="Profile Logo" className="fixed bottom-4 right-4 w-16 h-16" />
    </div>
  );
};

export default InvestmentGoals;

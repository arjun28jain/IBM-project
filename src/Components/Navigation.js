import React from 'react'
import profilelogo from './profilelogo.jpg';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {

    const navigate = useNavigate();
    
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-white shadow-md fixed top-0 z-50">
        <div className="flex items-center">
          <img src={profilelogo} alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">WealthBuild</h1>
        </div>
        <ul className="flex space-x-6 text-lg ml-auto mr-7">
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate('/home')}>Home</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate('/invest')}>Invest</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate('/save')}>Save</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate('/spend')}>Spend</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate('/borrow')}>Borrow</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate('/learn')}>Learn</li>
        </ul>
        <button onClick={() => navigate('/profile')} className="px-4 py-2 bg-blue-500 text-white rounded-lg">My Profile</button>
      </nav>
  )
}

export default Navigation
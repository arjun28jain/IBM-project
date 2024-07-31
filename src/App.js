import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Home from './Components/Home';
import Invest from './Components/Invest';
import Save from './Components/Save';
import Spend from './Components/Spend';
import Borrow from './Components/Borrow';
import Learn from './Components/Learn';
import Profile from './Components/Profile';
import InvestmentGoals from './InvestmentGoals'; // Assuming InvestmentGoals is different from Invest

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/investment-goals" element={<InvestmentGoals />} />
        <Route path="/save" element={<Save />} />
        <Route path="/spend" element={<Spend />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;

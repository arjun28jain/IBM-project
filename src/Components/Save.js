import Navigation from './Navigation';
import React from 'react';

const Save = () => {

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-0 relative">
       
       <Navigation/>

      <div className="w-full max-w-4xl mt-20 p-6">
        <h1 className="text-2xl font-bold mb-4">Saving Plans</h1>

      </div>
    </div>
  );
};

export default Save;

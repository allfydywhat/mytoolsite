import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
        Free Online Tasbih Counter
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
    </header>
  );
};

export default Header;
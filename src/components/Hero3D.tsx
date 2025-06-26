
import React from 'react';

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Hero3D;

import React from 'react';

export function AboutHero() {
  return (
    <div className="relative h-[400px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80"
          alt="Auto Service Shop"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 h-full bg-gradient-to-r from-gray-900/90 to-transparent">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">WHEEL</h1>
          <h2 className="text-4xl font-bold text-blue-400 mb-4">BE OKAY</h2>
          <h3 className="text-3xl text-white">ABOUT US</h3>
        </div>
      </div>
    </div>
  );
}
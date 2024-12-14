import React from 'react';
import { Link } from './Link';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80"
          alt="Auto Repair Shop"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 h-full bg-gradient-to-r from-gray-900/90 to-transparent">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Auto Repair Maintenance Services & Repair
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              "We can handle any Car Problem"
            </p>
            <div className="flex space-x-4">
              <Link href="/appointment" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
                SCHEDULE NOW
              </Link>
              <Link href="/services" className="border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition">
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
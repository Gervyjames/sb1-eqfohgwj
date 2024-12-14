import React from 'react';
import { Settings2, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <Settings2 className="w-16 h-16 mx-auto mb-4" />
        <p className="text-sm text-gray-400 mb-6">Serving Every Wheel Matter Just one at time</p>
        
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="hover:text-blue-400 transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-sm text-gray-400">
          © 2024 Wheel Be Okay. Keeping You Rolling.
        </p>
      </div>
    </footer>
  );
}
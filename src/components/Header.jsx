import React from 'react';
import { Settings2 } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="bg-black text-white py-4">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT US</Link>
          <Link href="/services" className="text-blue-400">SERVICES</Link>
        </div>
        
        <div className="flex items-center">
          <Settings2 className="w-10 h-10" />
        </div>
        
        <div className="flex items-center space-x-6">
          <Link href="/appointment">APPOINTMENT</Link>
          <Link href="/contact">CONTACT US</Link>
          <Link href="/login" className="text-blue-400">LOG IN/ REGISTER</Link>
        </div>
      </nav>
    </header>
  );
}
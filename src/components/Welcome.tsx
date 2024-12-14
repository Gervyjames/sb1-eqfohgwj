import React from 'react';

export function Welcome() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 grid grid-cols-2 gap-12">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80"
            alt="Service Bay"
            className="w-full h-64 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1492462543947-040389c4a66c?auto=format&fit=crop&q=80"
            alt="Oil Change"
            className="w-full h-32 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1562141961-b5d1855f1716?auto=format&fit=crop&q=80"
            alt="Luxury Car"
            className="w-full h-32 object-cover rounded-lg col-span-2"
          />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-4">WELCOME</h2>
          <h3 className="text-xl text-blue-400 mb-6">TO THE WHEEL BE OKAY GARAGE AUTO REPAIR SHOP</h3>
          <p className="text-gray-300 leading-relaxed">
            Your trusted partner in vehicle care and maintenance. With years of experience and a team of certified mechanics, we take pride in offering top-notch automotive services tailored to your needs. Whether it's a routine oil change, complex engine diagnostics, or emergency repairs, we've got you covered.
          </p>
        </div>
      </div>
    </section>
  );
}
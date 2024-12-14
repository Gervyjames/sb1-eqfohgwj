import React from 'react';
import { Link } from './Link';

export function AboutContent() {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">ABOUT US</h2>
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed mb-6">
            At Wheel Be Okay, we specialize in keeping your wheels in top shape. With years of experience, our skilled team offers reliable tire repairs, alignments, and more to ensure your vehicle is safe and ready for the road.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            We're all about fast, friendly service and getting you back on the road with confidence. Whether it's a quick tire fix or a more detailed repair, we've got you covered. At Wheel Be Okay, your ride is our priority!
          </p>
          <Link href="/appointment" className="bg-black text-white px-8 py-4 rounded hover:bg-gray-900 transition inline-block">
            BOOK APPOINTMENT NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
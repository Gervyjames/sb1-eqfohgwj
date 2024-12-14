import React from 'react';

export function GarageGallery() {
  const images = [
    "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1492462543947-040389c4a66c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1562141961-b5d1855f1716?auto=format&fit=crop&q=80"
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">GARAGE</h2>
        <div className="grid grid-cols-2 gap-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Garage Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
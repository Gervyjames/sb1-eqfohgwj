import React from 'react';
import { Gauge, Disc, WrenchIcon } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Gauge className="w-16 h-16 text-red-600" />,
      title: "Wheel Alignment & Balancing",
      image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&q=80"
    },
    {
      icon: <Disc className="w-16 h-16 text-red-600" />,
      title: "Tire Installation & Repairs",
      image: "https://images.unsplash.com/photo-1600147131759-880e94a6185c?auto=format&fit=crop&q=80"
    },
    {
      icon: <WrenchIcon className="w-16 h-16 text-red-600" />,
      title: "Brake Inspections & Repairs",
      image: "https://images.unsplash.com/photo-1562141961-b5d1855f1716?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">SERVICES</h2>
        <div className="grid grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition">
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  );
}
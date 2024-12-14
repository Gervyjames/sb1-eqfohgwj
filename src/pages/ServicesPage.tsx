import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServiceHero } from '../components/ServiceHero';
import { ServiceCard } from '../components/ServiceCard';

const services = [
  'WHEEL ALIGNMENT',
  'TIMING BELT REPLACEMENT',
  'ENGINE DIAGNOSTICS',
  'VEHICLE COMPUTER PROGRAMMING',
  'SPEEDOMETER',
  'PRE-PURCHASE INSPECTION',
  'TUNE-UP',
  'SHOCKS AND STRUTS',
  'RADIATOR REPAIR AND SERVICES',
  'TRANSMISSIONS',
  'FUEL SYSTEM',
  'FUEL EXCHANGE SERVICES',
  'TOWING',
  'LIGHTS',
  'OVERHAUL',
  'TIRE SERVICES',
  'ELECTRICAL',
  'OIL CHANGE'
];

export function ServicesPage() {
  const handleServiceClick = (service: string) => {
    // Handle service selection
    console.log(`Selected service: ${service}`);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <ServiceHero />
      
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service}
                onClick={() => handleServiceClick(service)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
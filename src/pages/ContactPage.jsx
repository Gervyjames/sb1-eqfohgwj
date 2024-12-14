import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../lib/constants';

export function ContactPage() {
  const handlePhoneClick = () => {
    window.location.href = `tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`;
  };

  const handleAddressClick = () => {
    const addressQuery = encodeURIComponent(
      `${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.city}, ${CONTACT_INFO.address.state} ${CONTACT_INFO.address.zip}`
    );
    window.open(`https://www.google.com/maps/search/?api=1&query=${addressQuery}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
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
            <h3 className="text-3xl text-white">CONTACT US</h3>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 p-8 rounded-lg">
          <div className="text-white text-center">
            <button 
              onClick={handlePhoneClick}
              className="mb-8 group hover:scale-105 transition-transform duration-200 w-full"
            >
              <Phone className="w-12 h-12 mx-auto mb-4 text-white" />
              <h2 className="text-3xl font-bold mb-4 group-hover:text-blue-400">
                {CONTACT_INFO.phone}
              </h2>
            </button>
            
            <button 
              onClick={handleAddressClick}
              className="text-center group hover:scale-105 transition-transform duration-200 w-full"
            >
              <MapPin className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-xl group-hover:text-blue-400">
                <p className="mb-2">Address: {CONTACT_INFO.address.street},</p>
                <p>{CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}</p>
              </div>
            </button>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwMC4wIk4gNzPCsDU4JzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1624987456789!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
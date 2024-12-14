import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  const phoneNumber = "(123) 456-7890";
  const address = {
    street: "123 Wheel Drive",
    city: "AutoCity",
    state: "TX",
    zip: "45678"
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/[^0-9]/g, '')}`;
  };

  const handleAddressClick = () => {
    const addressQuery = encodeURIComponent(
      `${address.street}, ${address.city}, ${address.state} ${address.zip}`
    );
    window.open(`https://www.google.com/maps/search/?api=1&query=${addressQuery}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 p-8 rounded-lg">
      <div className="text-white text-center">
        <button 
          onClick={handlePhoneClick}
          className="mb-8 group hover:scale-105 transition-transform duration-200 w-full"
        >
          <Phone className="w-12 h-12 mx-auto mb-4 text-white" />
          <h2 className="text-3xl font-bold mb-4 group-hover:text-blue-400">{phoneNumber}</h2>
        </button>
        
        <button 
          onClick={handleAddressClick}
          className="text-center group hover:scale-105 transition-transform duration-200 w-full"
        >
          <MapPin className="w-12 h-12 mx-auto mb-4 text-white" />
          <div className="text-xl group-hover:text-blue-400">
            <p className="mb-2">Address: {address.street},</p>
            <p>{address.city}, {address.state} {address.zip}</p>
          </div>
        </button>
      </div>
      
      <div className="h-[400px] rounded-lg overflow-hidden">
        <ContactMap />
      </div>
    </div>
  );
}
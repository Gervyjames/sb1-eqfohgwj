import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-white">
            <div className="mb-8 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-white" />
              <h2 className="text-3xl font-bold mb-4">(123) 456-7890</h2>
            </div>
            
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-xl">
                <p className="mb-2">Address: "123 Wheel Drive,</p>
                <p>AutoCity, TX 45678"</p>
              </div>
            </div>
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
      </div>
    </section>
  );
}
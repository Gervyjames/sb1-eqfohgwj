import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Ben Turner",
      rating: 5,
      text: "I couldn't be happier with the service at Wheel Be Okay! The staff was skilled, and they got my car back on the road in no time. Highly recommend them!"
    },
    {
      name: "Mike Sullivan",
      rating: 5,
      text: "Great for fixing my car in a timely manner! They went above and beyond to ensure my satisfaction. 5-star go experience and great customer care!"
    },
    {
      name: "Tony Becker",
      rating: 5,
      text: "The team at Wheel Be Okay really knows their stuff. Professional service, fair pricing, and they treat you like family. Will keep coming back!"
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-2">TRUSTED BY OUR CUSTOMERS</h2>
        <div className="flex justify-center items-center space-x-2 mb-12">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
          <span className="text-gray-400 ml-2">5.0 rating (8 reviews)</span>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
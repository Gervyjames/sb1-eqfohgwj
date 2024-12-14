import React, { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import toast from 'react-hot-toast';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  brand: string;
  model: string;
  year: string;
  date: string;
  time: string;
  service: string;
}

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

export function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    brand: '',
    model: '',
    year: '',
    date: '',
    time: '',
    service: ''
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = '/login';
      } else {
        setFormData(prev => ({
          ...prev,
          email: user.email || '',
          firstName: user.displayName?.split(' ')[0] || '',
          lastName: user.displayName?.split(' ')[1] || ''
        }));
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      toast.success('Appointment scheduled successfully!');
      // Redirect to confirmation page or dashboard
    } catch (error) {
      toast.error('Failed to schedule appointment. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">PERSONAL INFORMATION</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            FIRST NAME (REQUIRED)
          </label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full p-2 border rounded-md bg-gray-100"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            EMAIL ADDRESS (REQUIRED)
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded-md bg-gray-100"
            value={formData.email}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LAST NAME (REQUIRED)
          </label>
          <input
            type="text"
            name="lastName"
            required
            className="w-full p-2 border rounded-md bg-gray-100"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PHONE NUMBER (REQUIRED)
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-2 border rounded-md bg-gray-100"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 border-b pb-2">VEHICLE INFORMATION</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            BRAND NAME (REQUIRED)
          </label>
          <input
            type="text"
            name="brand"
            required
            className="w-full p-2 border rounded-md bg-gray-100"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            MODEL (REQUIRED)
          </label>
          <input
            type="text"
            name="model"
            required
            className="w-full p-2 border rounded-md bg-gray-100"
            value={formData.model}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            YEAR (REQUIRED)
          </label>
          <input
            type="text"
            name="year"
            required
            className="w-full p-2 border rounded-md bg-gray-100"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 border-b pb-2">TIME & DATE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            MM/DD/YYYY (REQUIRED)
          </label>
          <input
            type="date"
            name="date"
            required
            className="w-full p-2 border rounded-md bg-gray-100"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            HH:MM (REQUIRED)
          </label>
          <input
            type="time"
            name="time"
            required
            className="w-full p-2 border rounded-md bg-gray-100"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 border-b pb-2">SERVICES</h2>
      <div className="mb-8">
        <select
          name="service"
          required
          className="w-full p-2 border rounded-md bg-gray-100"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service.toLowerCase()}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition"
      >
        SUBMIT
      </button>
    </form>
  );
}
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AppointmentForm } from '../components/AppointmentForm';

export function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="py-16 px-4">
        <AppointmentForm />
      </div>
      <Footer />
    </div>
  );
}
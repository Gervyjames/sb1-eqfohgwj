import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { RegisterForm } from '../components/RegisterForm';

export function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="py-16 px-4">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
}
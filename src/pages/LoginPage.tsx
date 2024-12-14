import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LoginForm } from '../components/LoginForm';

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="py-16 px-4">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}
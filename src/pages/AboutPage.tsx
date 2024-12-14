import React from 'react';
import { Header } from '../components/Header';
import { AboutHero } from '../components/AboutHero';
import { AboutContent } from '../components/AboutContent';
import { GarageGallery } from '../components/GarageGallery';
import { Footer } from '../components/Footer';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <AboutHero />
      <AboutContent />
      <GarageGallery />
      <Footer />
    </div>
  );
}
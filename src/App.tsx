import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Welcome } from './components/Welcome';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { Toaster } from 'react-hot-toast';

function App() {
  // Simple route handling
  const path = window.location.pathname;

  return (
    <>
      <Toaster position="top-right" />
      {(() => {
        switch (path) {
          case '/services':
            return <ServicesPage />;
          case '/about':
            return <AboutPage />;
          case '/appointment':
            return <AppointmentPage />;
          case '/login':
            return <LoginPage />;
          case '/register':
            return <RegisterPage />;
          default:
            return (
              <div className="min-h-screen bg-black">
                <Header />
                <Hero />
                <Welcome />
                <Services />
                <Testimonials />
                <Footer />
              </div>
            );
        }
      })()}
    </>
  );
}

export default App;
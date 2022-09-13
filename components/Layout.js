import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <div className='content'>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

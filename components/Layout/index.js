import React from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation/Navbar';

import { MainWrapper } from './styles';

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <MainWrapper>
        {children}
        <Footer />
      </MainWrapper>
    </>
  );
}
